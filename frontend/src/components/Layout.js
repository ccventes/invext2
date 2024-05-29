//src/components/layout.js
//src/components/layout.js
import * as React from 'react'
//import { Link, graphql, useStaticQuery } from 'gatsby'
import "./unal.css";
import Header from './Header';
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';
import Banner from './Banner';



const cliente = new ApolloClient({
  uri: 'http://localhost:1337/graphql', 
  cache: new InMemoryCache()
})



const Layout = ({ showBanner = false}) =>{
  return (
      <ApolloProvider client = {cliente}>
      <Header />
      {showBanner && <Banner />} {/* Banner condicional */}

      </ApolloProvider>
      
   
  )
}

export default Layout