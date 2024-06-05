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



const cliente = new ApolloClient({
  uri: config.apiUrl + '/graphql', 
  cache: new InMemoryCache()
})



const Layout = ({ showBanner }) =>{
  return (
      <ApolloProvider client = {cliente}>
      <Header />
      {
       showBanner ? <Banner /> : null
       
      } 
      <Searchbar color="#0b0561" />

      </ApolloProvider>
      
   
  )
}

export default Layout