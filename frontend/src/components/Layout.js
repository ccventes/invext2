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
import Footer from './footer';




const cliente = new ApolloClient({
  uri: config.apiUrl + '/graphql', 
  cache: new InMemoryCache()
})



const Layout = ({ data }) =>{
  
  console.log('PAGE is ', data.pagina);
  if (data.pagina === 'index'){
    const showBanner = true;
    
    return (
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page ="index" />
      <Footer />

      </ApolloProvider>
      
   
  )
  }
  else if (data.pagina === '/servicios'){
    const showBanner = false;
    return (
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page ="/servicios"/>
      <Footer />

      </ApolloProvider>
      
   
  )
    
  }else if(data.pagina === "/practica"){
    const showBanner = false;
    console.log("CONTENIDO ENTRO A LA PRACTICApagina",data.isVisible)
    return (
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page ="/practica"/>
      <Footer />

      </ApolloProvider>
      
   
  ) 
        
  }
  else if(data.pagina === "/convocatoria"){
    const showBanner = false;
    return (
        
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page = {data.pagina}/>
      <Footer />

      </ApolloProvider>


    )
  }else if(data.pagina === "/vigilancia"){

    const showBanner = false;
    return(
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page = "/vigilancia"/>
      <Footer />

      </ApolloProvider>
    )
  }else if(data.pagina !== "/index"){
    console.log("HEY ES " + data.pagina)

    const showBanner = false;
    return(
      <ApolloProvider client = {cliente}>
      <Header />
      <Searchbar color="white" />
      {
       showBanner ? <Banner /> : null
       
      } 
      
      <Contenido page = {data.pagina} />
      <Footer />
      

      </ApolloProvider>
    )

  }
  
  
}

export default Layout