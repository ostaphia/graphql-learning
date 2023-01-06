import React, {useState} from 'react';
import {useQuery, useLazyQuery,useMutation, gql} from '@apollo/client';
//useLazyQuery: we only want to fetch the data when we want it to fetch


//TODO: query needs updated since it has error handling
const QUERY_ALL_USERS = gql`
query GetAllUsers{
  users{
    id
    name
    age
    username
    nationality 
    }
  }
`

const QUERY_ALL_MOVIES = gql`
query GetAllMovies{
  movies{
  id
  name
  yearOfPublication
  }
}
`
const GET_MOVIE_BYNAME = gql`
query Movie($movieName: String!){
  movie(name: $movieName){
  name
  yearOfPublication
    }
}
`

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!){
    createUser(input: $input){
    name
    id
    }
  }
`


function DisplayData(){
    const [movieSearched, setMovieSearched] = useState("")

    // Create User States
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(0)
    const [nationality, setNationality] = useState("")


//Refetch: tell our use query hook to refetch the data and query more users when a new user is added to the list
    const {data, loading, refetch} = useQuery(QUERY_ALL_USERS)
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES)
    const[fetchMovie, {data: movieSearchData, error: movieError}] = useLazyQuery(GET_MOVIE_BYNAME)
    const[createUser] = useMutation(CREATE_USER_MUTATION)

    if (loading){
      return <h1> Data loady loady :3</h1>;
    }
    // if(data){
    //     console.log(data);
    // }
    // if (error) {
    //   console.log(error);
    // }
    // if (data){
    //   console.log(data);
    // }
    // if(movieError){
    //   console.log(movieError);
    // }
    return(
        <div>
          <div>  
            <input type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value)}}/>
            <input type="text" placeholder="Username..." onChange={(event) => {setUsername(event.target.value)}} />
            <input type="number" placeholder="Age..." onChange={(event) => {setAge(event.target.value)}} />
            <input type="text" placeholder="Nationality..." onChange={(event) => {setNationality(event.target.value.toUpperCase())}} />
            <button onClick = {() => {
              createUser({ variables: {  input: { name: name,username: username,age: Number(age),nationality: nationality }} }); 
            refetch();
            }}> Create User </button>
          </div>
         
          {  data && data.users.map((user) => {
              return ( 
                <div>
                <h1> Name: {user.name} </h1>
                <h1> Username: {user.username} </h1>
                <h1> age: {user.age} </h1>
                <h1> Nationality: {user.nationality}</h1>
                 </div>
              );
            })
          }
          {movieData && movieData.movies.map((movie) => {
            return <h1> Movie Name: {movie.name}</h1>
          })}

          <div>
            <input type="text" placeholder = "Interstellar..." onChange = {(event) => {setMovieSearched(event.target.value)}}
            />
            <button 
            onClick = {() => {
              fetchMovie({
                variables:{
              movieName: movieSearched,
            },
            });
            }}> Fetch Data</button>
            <div>
            {movieSearchData && (
            <div> 
              {""}
              <h1>Movie Name: {movieSearchData.movie.name}</h1> {""}
              <h1>Year Of Publication: {movieSearchData.movie.yearOfPublication}</h1> {""}
             </div>
              )}
              {movieError && <h1> error fetching data</h1>}
            </div>
          </div>
        </div>
    )
}

export default DisplayData