const Band = require('../../models/band');

module.exports = {
    bands: async () => {
        try {
            const bands = await Band.find();
            return bands;
        } catch (err) {
            throw err;
        }
    },
    registerBand: async (args, req) => {
        
        const band = new Band({
            name: args.bandInput.name,
            members: args.bandInput.members,
            description: args.bandInput.description,
            image: args.bandInput.image
            
        })

        let registeredBand;
         
        try{
            registeredBand = await band.save();
            console.log(registeredBand);
            return registeredBand;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}