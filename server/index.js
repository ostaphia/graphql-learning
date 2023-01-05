const { ApolloServer } = require("apollo-server");
const {typeDefs} = require("./schema/type-defs");
const {resolvers} = require("./schema/resolvers");

const server = new ApolloServer({typeDefs, resolvers})
//every piece of data exists inside of typeDefs
//all of the functions that make calls will "resolvers"
//resolvers: Functions that deal with the data
//typeDefs: Where you define your types

server.listen().then(({url}) => {
console.log(`Your API IS RUNNING AT: ${url} :)`);
});