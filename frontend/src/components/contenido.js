import React, { useState,useCallback } from 'react';
import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoticiasMockup from '../images/noticias_unal_mockup.png';
import Galeria from './Galeria'
import Selector from './Selector';
import Modalidades from './modalidades';
import './unal.css'
import { Link } from "gatsby";
import Accordion from 'react-bootstrap/Accordion';

const SECCIONES = gql`
  query GetSection($identificacion: ID = "1") {
    seccions(filters: {id:{eq: $identificacion} } ) {
      data {
        id
        attributes {
          titulo
          ContenidoHTML
        }
      }
    }
}
`;
const SECCIONES2 = gql`
query getInfoPagina($url: String = "/servicios") {
    paginas(filters: {url:{contains: $url} } ){
      data{
        id
        attributes{
          url
          nombre
          seccions(sort: "id:asc"){
            data{
              id
              attributes{
                titulo
                ContenidoHTML
                Orientacion
                galeria{
                  data
                    {
                      id
                      attributes{
                        Maximo_filas
                        Maximo_columnas
                        Orientacion
                        slug
                        Elementos{
                          __typename
                          ... on ComponentMultimediaImagen {
                            id
                            Descripcion
                            Archivo{
                              data{
                                attributes{
                                  url
                                  
                                }
                              }
                            }
                          }
                        }
                        
                        }
                      }
                    }
                }
                
              }
            }
          }
          
        }
      }
}
`;

const divLink ={
   width: "80%",
   marginLeft: "48px",
   borderStyle: "solid",
   borderColor: "gray",
   borderWidth: "Thick",
   borderRadius: "15px",
   
   zIndex: 2, // Higher z-index for the div


};
const imgStyle = {
  position: 'relative',
  zIndex: -1, // Lower z-index for the image
};

const Sectionorganization = {
  
  display : 'flex',
  flexDirection: 'column',

}




export default function Contenido({page}) {
  const { loading, error, data } = useQuery(SECCIONES);
  console.log("Estoy en contenido, la pagina es: ", page)
  console.log("Los datos de secciones son: ", JSON.stringify(data, null, 2));
  const { loading: loadingPagina, error: errorPagina, data: dataPagina } = useQuery(SECCIONES2); // hay que poner el query bien
  console.log("OOOOOOOOOO Los datos de secciones2 son: ", JSON.stringify(dataPagina, null, 2));
  const [selectorKey, setActiveKey] = useState('3');

  function handleClick(key) {
    
    //const id = event.currentTarget.id;
    console.log("He hecho click ya saben donde con id: == >", key)
    setActiveKey(key);
    
  }
  
  

  
   //console.log("DATAPAGINA TIENE UNA LONGITUD DE ", dataPagina.length, " DATOS");
  
  
  if(page === 'index'){
        
  
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        console.log("voy a renderizar index");
  return (
    <section>
      <Container>
        <Row className= 'mt-4'>
            <Col md={1}></Col>
            <Col md={7}>
                {
                    
                    <div key={data.seccions.data[0].id}>
                    <h2>{data.seccions.data[0].attributes.titulo}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.seccions.data[0].attributes.ContenidoHTML }} />
                    </div>
                }

            </Col>
            <Col md={4}>
              
              
            <h3 style={{ textAlign: 'center' }}>Boletin Diepal</h3>
              <div style = {divLink}>
                 
                 <img alt="Esto es solo por mocukup" src={NoticiasMockup} width="100%" height="auto" title="mockup" style={imgStyle}/>
  
              </div>
              <p></p>
              <h3 style={{ textAlign: 'center' }}>Noticias y novedades</h3>
              <div style = {divLink}>
                 
                 <img alt="Esto es solo por mocukup" src={NoticiasMockup} width="100%" height="auto" title="mockup" style={imgStyle}/>
  
              </div>
              
                                    
            
            </Col>
        </Row>
      </Container>
      
    </section>
  );
}if(page === '/servicios'){
  console.log("Aqui voy a renderizar diplomodos:", page )
  
  if (loadingPagina) return <p>Loading...</p>;
  if (errorPagina) return <p>Error: {error.message}</p>;
  if(dataPagina){
    //if (dataPagina.paginas && dataPagina.paginas.data.length > 0){
    //  console.log("A PUNTO DE HACER RENDER: ", dataPagina.paginas.data[0].attributes.seccion.data.attributes.Orientacion );
    //}
    console.log("ME TIRE TODO dataPagina: " , dataPagina.paginas.data[0].attributes.seccions.data)
  }
  
  //dataPagina.paginas.data[0].attributes.seccions.data
  return(   
    <section>
    <h1 style = {{ textAlign:'center', marginTop: '50px'}}> {dataPagina.paginas.data[0].attributes.nombre} </h1>
    <div style = {{borderTop: 'dotted #bac2c2 1px', display:'flex', flexDirection:'row', paddingTop: '50px'}}>
    <div className= 'barra-lateral oferta'>

                <div className={'sidebar cursos'}>
            
                <ul>
                    {
                        dataPagina.paginas.data[0].attributes.seccions.data.map(seccion =>(

                           
                              
                              <li key = {'li' + seccion.id }><Link key = {'L' + seccion.id } id = {seccion.id} to = "#" 

                                 onClick={(e) => {
                                  e.preventDefault();
                                  handleClick(seccion.id)
                                
                                 }
                                }
                              >
                              {seccion.attributes.titulo}
                              </Link></li>
                          
                          ) )
                    }
                    </ul>
                </div>
                          

    </div>
    <div style = {{display :'flex',flexDirection: 'column', width:'60%' }}>
    <Accordion  activeKey = {selectorKey}>
    {
      dataPagina.paginas.data[0].attributes.seccions.data.map(seccion => (

        <Accordion.Item key={seccion.id} eventKey={seccion.id}>
          <Accordion.Header><h4>{seccion.attributes.titulo}</h4></Accordion.Header>
          <Accordion.Body>
          <div key = {seccion.id} id = {seccion.id + "-" + seccion.attributes.titulo }>
                 
                            
                            {seccion.attributes.Orientacion  === "Vertical" ? 
                            <div style = {{display :'flex',flexDirection: 'column', }}>
                              {
                                <div dangerouslySetInnerHTML={{ __html: seccion.attributes.ContenidoHTML }} />
                                
                              }
                              {
                                <Galeria data={seccion.attributes} />
                              }
                              
                            </div> 
                            :
                            <div style = {{display :'flex',flexDirection: 'row', }} >
                                {
                                <div dangerouslySetInnerHTML={{ __html: seccion.attributes.ContenidoHTML }} />
                                
                              }
                              {
                                <Galeria data={seccion.attributes} />
                              }
                              
                            
                            </div> 
                            }

                   
                
                
                

          </div>
          </Accordion.Body>
          
          </Accordion.Item>
          
          
      ))
      
    }
    </Accordion>
    </div> 
    
    </div>
    </section>   
  )
}if(page === '/practica'){
     
        console.log('Estoy en practica')
        return(
          <section>
          <Selector  />
          <Modalidades />
          </section>
        )
        
    
 }
}
