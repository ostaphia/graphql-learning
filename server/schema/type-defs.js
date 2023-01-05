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
        favoriteMovies: [Movie]
    }

    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheatres: Boolean!
    }

    type Query { #allows us to query users and movies
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = CHILE
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }
    
    #input: allows you to define inputs for arguments whenever you have a field
    #why input instead of directly putting inputs? : Lots of things you can do with inputs that you can't do with the types. 
    #With createInput you can make it to where values have default values whereas if you do it with types you CANNOT do that. 

    type Mutation { #graphql deals a lot w/ caching 
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!) : User
        deleteUser(id: ID!): User
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
