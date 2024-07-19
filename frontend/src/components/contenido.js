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
import Button from 'react-bootstrap/Button';
import vcientifica from '../images/vig_cientifica.png';
import vcomercial from '../images/vig_comercial.png';
import vtecno from '../images/Vig_tecnologica.png';

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
   width: "100%",
   marginLeft: "48px",
   borderStyle: "solid",
   borderColor: "rgb(0, 119, 181)",
   borderWidth: "Thin",
   borderRadius: "15px",
   boxShadow: "5px 4px 10px rgba(1, 80, 123, 0.7)",
   height: "auto",
   marginTop: "30px",
   display: "flex", // Flexbox for centering
    // Vertical centering
  
  flexDirection: "column",
   
   zIndex: 2, // Higher z-index for the div


};
const textStyle = {

   textAlign: "center",
   paddingLeft: "10px",
   paddingRight: "10px",
   marginTop: "20px",

}
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
      <Container className='mt-5 ms-1 me-1 '>
        <Row className= 'mt-4'>
            <Col md={1}></Col>
            <Col md={8}>
                {
                    
                    <div key={data.seccions.data[0].id}>
                    <h1>{data.seccions.data[0].attributes.titulo}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.seccions.data[0].attributes.ContenidoHTML }} />
                    </div>
                }

            </Col>
            <Col md={3}>
              
              
            
              <div style = {divLink}>
                  <h4 style = {textStyle}> Consulta nuestro boletín de extensión</h4>
                  <Link to = "https://di20r.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNsWPC7qglKxr/lTgnyfMUfTXy" style={{textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
                  <Button className = "mb-3 ms-5 me-5" variant="outline-primary" role="button">Entra al Boletín</Button>
                  </Link>
  
              </div>
              
              
              <div style = {divLink}>
              <h4 style = {textStyle}> Consulta AlDía UNAL para noticias de nuestra sede</h4>
              <Link to = "https://aldiaunal.palmira.unal.edu.co/" style={{textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
              
              <Button className = "mb-3 ms-5 me-5" variant="outline-primary">Entra a AlDía</Button>
              </Link>
                 
  
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
 if(page === '/convocatoria'){
     
  console.log('Estoy en convocatorias')
  return(
    <section>
     <h1 style = {{textAlign:'center', paddingTop: '50px'}}> Convocatorias</h1>
     <h3 style = {{textAlign:'center'}}> Conoce las oportunidades para ti a través de nuestras convocatorias internas y externas.</h3>
     <div  className="boxStyleW">
        <div className="conv-menu">
                
             
             <Link  to = "https://investigacion.unal.edu.co/investigaci%C3%B3n/servicios-inv/convocatorias-internas">
                <div className="conv-menu-item">
                 
                    <h2> 
                      
                      CONVOCATORIAS INTERNAS
                    </h2>
                    <img src="https://res.cloudinary.com/dmlhbcigt/image/upload/v1721229625/1_convocatorias_internas_09cf5e3925.jpg" alt="imagen 1" style={{ maxWidth: '100%', height: '100%', paddingLeft: '0px',paddingRight: '0px' , marginTop: '0px', zIndex: '-1' }}/>
                
                </div>
              </Link>
                
                <div className='conv-menu-separator'></div>
                <Link  to = "https://investigacion.unal.edu.co/investigaci%C3%B3n/servicios-inv/convocatorias-externas">
                <div className="conv-menu-item">
                    <h2> CONVOCATORIAS EXTERNAS</h2>
                    <img src="https://res.cloudinary.com/dmlhbcigt/image/upload/v1721229624/2_convocatorias_externas_91b2e76df2.jpg" alt="imagen 2" style={{ maxWidth: '100%', height: '100%',  paddingLeft: '0px',paddingRight: '0px' , marginTop: '0px' }}/>
                
                </div>
                </Link>
                
                
        </div>

     </div>
    </section>
  )
  

}if(page === "/vigilancia"){
    return(
        <div className="AlternaColor">
              <section className='seccion' >
                  <div className='naranja'>
                  <h1 style = {{textAlign:'center', paddingTop: '50px',paddingBottom: '50px', color: '#2F2468', fontSize: '80px'}}> Vigilancia Tecnológica </h1>
                  <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}> La Vigilancia Tecnológica es un proceso sistemático de recolección, análisis y difusión de información científica, tecnológica y comercial relevante para apoyar la toma de decisiones estratégicas. 
                  </h4>
                  <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}> En la Universidad Nacional de Colombia, sede Palmira, aplicamos esta metodología para identificar oportunidades de innovación, acompañar los procesos de protección de la propiedad intelectual, anticipar cambios en el entorno y fortalecer la competitividad de nuestros proyectos y alianzas.
                  </h4>
                  <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}> Este proceso se aplica de manera continua, adaptándose a las necesidades específicas de cada desarrollo científico, tecnológico y los emprendimientos.
                  </h4>
              </div>

              </section>
              <section className='seccion'> 
                 <div className='azul'> 
                 <h1 style = {{textAlign:'center', paddingTop: '50px',paddingBottom: '30px', color: '#2F2468', fontSize: '80px'}}> Tipos de Vigilancia </h1>
                 <div  className="boxStyleW">
                          <div className="containervigilancia">
                                
                                <div className="divVigilancia">
                                    <h2> Vigilancia Científica </h2>
                                    <h5> Monitorea los avances en investigación y desarrollo dentro de áreas específicas de conocimiento.</h5>
                                    <div className='iconvig'>
                                          <img src ={vcientifica} width="130" height="130"></img>
                                    </div>

                                </div>
                                <div className="separatorvigilancia"></div>
                                <div className="divVigilancia">
                                    <h2> Vigilancia Tecnológica </h2>
                                    <h5> Se enfoca en la evolución de tecnologías emergentes y disruptivas que puedan impactar la industria.</h5>
                                    <div className='iconvig'>
                                          <img src ={vcomercial} width="130" height="130"></img>
                                    </div>

                                </div>
                                <div className="separatorvigilancia"></div>
                                <div className="divVigilancia">
                                    <h2> Vigilancia Comercial </h2>
                                    <h5> Analiza el mercado y la competencia para identificar oportunidades y amenazas.</h5>
                                    <div className='iconvig'>
                                          <img src ={vtecno} width="130" height="130"></img>
                                    </div>



                                </div>
                          </div>
                                     
                 </div>
                 </div>
              </section>
              <section className='seccion'> 
              <div className='naranja'>
              <h1 style = {{textAlign:'center', paddingTop: '50px',paddingBottom: '50px', color: '#2F2468', fontSize: '80px'}}> ¿Quiénes pueden acceder a estos servicios?</h1>
              <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%',fontSize: '30px'}}> Nuestro objetivo es apoyar a toda la comunidad académica y empresarial en la identificación de oportunidades tecnológicas y la protección de sus innovaciones a través de la gestión de la propiedad intelectual.</h4>
              <p></p>
              <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%',fontSize: '30px'}}>Los servicios de Vigilancia Tecnológica de la Universidad Nacional de Colombia, sede Palmira, están disponibles para:
                  <ul style ={{paddingLeft: "5%"}}>
                      <li>Estudiantes de pregrado y posgrado</li>
                      <li>Profesores e investigadores</li>
                      <li>Empresas y emprendedores</li>
                      <li>Entidades públicas y privadas</li>
                  </ul>
              </h4>
              <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%',fontSize: '30px'}}> Para recibir asesoría en Vigilancia Tecnológica y acompañamiento en Propiedad Intelectual (PI), por favor Agende su cita:</h4>
              <Link to = "https://calendar.app.google/ZLeEPJS83B4fh3C79" style={{textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
              <Button variant="outline-primary" size="lg">
                      Agendar Cita
              </Button>
              </Link>
              </div>
              
              </section>
              
        </div>

    )

}
}
