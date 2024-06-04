import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useQuery, gql } from '@apollo/client';
import config from '../config.js';

const BANNER = gql`
query GetBanner{
  bannerMain{
     data{
       id
       attributes{
         ImageRoute{
           data{
             attributes{
               name
               url
             }
           }
         }
       }
       
     }
 
}
 
}
`
//const { protocol, hostname } = window.location;
//const baseUrl = `${protocol}//${hostname}`;



export default function Banner() {
  const{loading, error, data} = useQuery(BANNER);
  if (loading) return <p>Loading...</p>
  if(error) return <p>Error :</p>
  console.log("EL dato de banner es: " +  JSON.stringify(data, null, 2));
  console.log('la enviromen-t vairable API URL:', config.apiUrl);
  const RutaImagen = data.bannerMain.data.attributes.ImageRoute.data.attributes.url;
  return (
    <Carousel>
         

                  <Carousel.Item >
                  <img src={ RutaImagen} className="d-block w-100 h-100" alt="..."/>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>

                  </Carousel.Item>



         
    
    
    </Carousel>
    
   
  )
}
