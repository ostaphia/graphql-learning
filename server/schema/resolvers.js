const {UserList, MovieList} = require("../FakeData");
const _ = require('lodash');
const { NoUnusedFragmentsRule } = require("graphql");
//parent: when you access parent, it returns whatever was returned in the previous level in the graph (so the parent of favoriteMovies is users) and it would return ALL the information of that parent

/* 
    query -> users -> favoriteMovies -> anotherLevel
    so we have three levels
    query (the first level) doesn't return anything
    another level would be like -> inside of movie theres some field that would return another type (like the genre's the movie falls under)
*/
//context: allows you to pass variables, numbers, models, whatever values, etc. throughout every single resolver. 

//info: rarely used, especially in the beginning but its important to understand the use case. 
const resolvers = {
    Query: {
        //USER RESOLVERS
        users: (parent, args, context, info) => {
            if(UserList) return {users: UserList}; //we have to return an object containing a field called users which is equal to userlist because thats how it was defined
            //users is the object
            /*
              users: [User!]!   --> {users: UserList}
            */


            //write all the javascript necessary what we want to return when some1 makes a query to the users field
            return{message: "there was an error"}
            //message is the object
        },
        user: (parent, args, context, info) => {
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
            favoriteMovies: (parent) => { 
                console.log(parent)
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
    UsersResult: { //object allows us to see the fields returned from our original resolver (which is users)
        //we're using this to know whether users or an error was returned
        __resolveType(obj){
            if(obj.users){
                return "UsersSuccessfulResult";
            }
            //if there was no errors return what we received 
            if(obj.message){
                return "UsersErrorResult"; 
            }
            return null;
        }
    }
};
//args contains whatever data the user passes, _ is a parent sub, no clue what that means though
//wtf is parent.
module.exports = {resolvers};
//constants all the resolver functions that will exist inside our api
//all the functions that actually do something inside our api will exist inside "resolvers"
//first define the highest level field which is "Query"
//inside of Query, define all the subfields (so define a resolvers function for users type etc.)

//fragments used for organization purposes & code reusage

//result box: whenever we have a mutation or query we want our return type to ?? 