const {UserList, MovieList} = require("../FakeData");
const _ = require('lodash');
const { NoUnusedFragmentsRule } = require("graphql");

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
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name: name}); //no need to do "name: name cuz it has the same name but i dont care"
            return movie;
        },
    },
    User: {
            favoriteMovies: () => { 
                return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010);
            },
        },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const {id, newUsername} = args.input
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id == id){
                    user.username = newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id == Number(id));
            return null;

        }
    },
};
//args contains whatever data the user passes, _ is a parent sub, no clue what that means though
//wtf is parent.
module.exports = {resolvers};
//constants all the resolver functions that will exist inside our api
//all the functions that actually do something inside our api will exist inside "resolvers"
//first define the highest level field which is "Query"
//inside of Query, define all the subfields (so define a resolvers function for users type etc.)