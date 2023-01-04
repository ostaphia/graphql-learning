const {UserList} = require("../FakeData");
const _ = require('lodash');

const resolvers = {
    Query: {
        //USER RESOLVERS
        users: () => {
            //write all the javascript necessary what we want to return when some1 makes a query to the users field
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList,{id: Number(id)}); //can shorthand is key and values have the same name so this could just be "id"
            return user;
        },
        //MOVIE RESOLVERS
        movies: () => {

        },
        movie: () => {

        },
    },
};
//args contains whatever data the user passes, _ is a parent sub, no clue what that means though

module.exports = {resolvers};
//constants all the resolver functions that will exist inside our api
//all the functions that actually do something inside our api will exist inside "resolvers"
//first define the highest level field which is "Query"
//inside of Query, define all the subfields (so define a resolvers function for users type etc.)