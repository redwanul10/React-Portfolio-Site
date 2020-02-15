import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import singlePost from './component/singlePost';
import SimpleReactLightbox from "simple-react-lightbox";


import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Template StyleSheet
import './styleSheet.css'
import './blog.css';
import './responsive.css';
import './App.css';


import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import ApolloClient from 'apollo-boost';
// import ApolloClient from 'apollo-client';
// import { ApolloProvider } from '@apollo/react-hooks';

// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// import introspectionQueryResultData from './fragmentTypes.json';

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData
// });

// //const httpLink = new HttpLink({ uri: 'http://localhost/wordpress/graphql' })
// const cache = new InMemoryCache({ fragmentMatcher });

// export const client = new ApolloClient({
//   cache,
//   link: new HttpLink({ 
//   uri: 'https://wpheadlesss.000webhostapp.com/g',
//   credentials: 'include',
  
//   // fetchOptions:{
//   //   mode:'no-cors'
//   // } 
// }),
// });

function App() {
  return (
    <div >
      <SimpleReactLightbox>
          <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/blog/:postId' component={singlePost}/>
            </Switch>
          </BrowserRouter>
        </SimpleReactLightbox>
    </div>
  );
}

export default App;
