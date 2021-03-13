const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const { assertCompositeType } = require('graphql');    
const request = require('request');

// CONNECTING TO MONGO DB 
mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// USING EXPRESS
const app = express();
app.use(express.json());

// SETTING HEADERS 
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});


app.post('/api/v1/public/subscribe', async (req, res) => {
    const { email } = req.body;

    if(!email){
        res.json({error: 'Email is required'});
        return;
    }

    try {
        //DEFINING SUBSCRIBE FUNCTION
        subscribe = async (emailInput) => {
            console.log(emailInput);
            const data = {
              email_address: emailInput,
              status: 'subscribed',
            };
            const listId = 'e2163926e4';
            const API_KEY = 'c7fca508b53391d9499aaddc3772bbe8-us1';
          await new Promise((resolve, reject) => {
              request.post(
                {
                  uri: `https://us1.api.mailchimp.com/3.0/lists/${listId}/members`,
                  headers: {
                    Accept: 'application/json',
                    Authorization: 
                    `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`
                  },
                  json: true,
                  body: data,
                },
                (err, response, body) => {
                  if (err) {
                    reject(err);
                  } else {
                    console.log("accepted");
                    console.log(body);
                    resolve(body);
                  }
                }
              );
            });
          }
        subscribe(email);
        res.json({ subscribed: 1 });
        console.log('non-error response is sent');
    } catch (err) {
      res.json({ error: err.message || err.toString() });
    }
  });

// USING GRAPHQL SCHEMAS AND INTERFACE
app.use(
    '/graphql',
    graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
    })
)

// STARTING SERVER
app.listen(8000, () => {
    console.log("connected on 8000");
})