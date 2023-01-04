const { gql } = require('apollo-server');
//allows us to write graphql code
const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
    }

    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheatres: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    enum Nationality {
        CHILE
        BRAZIL
        CANADA
        CHINA
        INDIA
    }
`;
module.exports = {typeDefs};
