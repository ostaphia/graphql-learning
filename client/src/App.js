import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import DisplayData from './DisplayData';
//classes created by apolloclient library
//ApolloClient: telling graphql that you want to use this to connect to an API
// useQuery: hook you use to make queries to your api, fetches data from api whenever the component renders.

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(), //apolloclient has really good state management, cache info and data into your browser. 
    uri: "http://localhost:4000/graphql", //url to where your graphql api is running
  });
  return (
    <ApolloProvider client = {client}>
    <div className="App">
     Hello World!
     <h1> List of Users </h1>
     <DisplayData />
    </div>
    </ApolloProvider>
   
  );
}

export default App;
