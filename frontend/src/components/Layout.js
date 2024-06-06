//src/components/layout.js
//src/components/layout.js
import * as React from 'react'
//import { Link, graphql, useStaticQuery } from 'gatsby'
import "./unal.css";
import Header from './Header';
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';
import Banner from './Banner';
import config from '../config';
import Searchbar from './Searchbar';
import Contenido from './contenido';



const cliente = new ApolloClient({
  uri: config.apiUrl + '/graphql', 
  cache: new InMemoryCache()
})



const Layout = ({ showBanner }) =>{
  return (
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      <Contenido />
      

      </ApolloProvider>
      
   
  )
}

export default Layout