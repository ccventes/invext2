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



const Layout = ({ page }) =>{
  
  console.log('PAGE is ', page);
  if (page === 'index'){
    const showBanner = true;
    
    return (
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      <Contenido page ="index" />
      

      </ApolloProvider>
      
   
  )
  }
  else{
    const showBanner = false;
    return (
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page ="/servicios"/>
      

      </ApolloProvider>
      
   
  )
    
  }
  
}

export default Layout