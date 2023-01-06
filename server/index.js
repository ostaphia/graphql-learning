const { ApolloServer } = require("apollo-server");
const {typeDefs} = require("./schema/type-defs");
const {resolvers} = require("./schema/resolvers");

const server = new ApolloServer({typeDefs, resolvers, context: ({req}) => {
    return {req}
}})
//every piece of data exists inside of typeDefs
//all of the functions that make calls will "resolvers"
//resolvers: Functions that deal with the data
//typeDefs: Where you define your types
//context is a function that returns an object
//context example: you could use it to pass a mongodb model through every resolver without having to import it in every single file. It prevents unorganized code and is useful in various different situations

server.listen().then(({url}) => {
console.log(`Your API IS RUNNING AT: ${url} :)`);
});