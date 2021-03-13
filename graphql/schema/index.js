const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Band {
        _id: ID!
        name: String!
        members: [String!]!
        description: String!
        image: String!
    }

    input BandInput {
        name: String!
        members: [String!]!
        description: String!
        image: String!
    }

    type RootQuery {
        bands: [Band!]!
    }

    type RootMutation{
        registerBand(bandInput: BandInput): Band
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)