import React, { useState,useCallback,useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
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
import Videos from './videos';
import Squarebulletlist from './Squarebulletlist';
import VisibleOnScroll from './VisibleOnScroll';
import useScrollVisibility from '../hooks/useScrollVisibility';
import Counter from './Counter';
import SidebarMenu from './Sidebarmenu';
import Lablist from './Lablist';
import GraficoBarras from './GraficoBarras';

import GraficoPie from "./GraficoPie";
import SemillerosNumeros from './SemillerosNumeros';


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
   marginLeft: "70px",
   //borderStyle: "solid",
   //borderColor: "rgb(0, 119, 181)",
   //borderWidth: "Thin",
   borderRadius: "15px",
   //boxShadow: "5px 4px 10px rgba(1, 80, 123, 0.7)",
   height: "auto",
   marginTop: "30px",
   display: "flex", // Flexbox for centering
    // Vertical centering
  backgroundColor: '#00969A',
  
  flexDirection: "column",
   
   zIndex: 2, // Higher z-index for the div


};
const textStyle = {

   textAlign: "center",
   paddingLeft: "10px",
   paddingRight: "10px",
   marginTop: "20px",
   color: "white",
   margin: "20px",

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
  const heroMoveRef = useRef(null);
  const isVisible = useScrollVisibility(heroMoveRef, { threshold: 0.7  });
  const startSectionRef = useRef(null);
  const endSectionRef = useRef(null);

const scrollToSection = (sectionRef) => {
  sectionRef.current.scrollIntoView({ behavior: 'smooth' });
};
  
  

  
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
                    <h1 style = {{textAlign:'center', paddingTop: '50px',paddingBottom: '50px', color: '#2F2468', fontSize: '50px'}}>{data.seccions.data[0].attributes.titulo}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.seccions.data[0].attributes.ContenidoHTML }} />
                    </div>
                }

            </Col>
            <Col style = {{paddingTop: '100px'}}md={3}>
              
              
            
              <div id = "extension"style = {divLink}>
                  <h4 style = {textStyle}> Consulta nuestro boletín de extensión</h4>
                  <Link to = "https://di20r.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNsWPC7qglKxr/lTgnyfMUfTXy" style={{textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
                  <Button id = "Btn-boletin" className = "mb-3 ms-5 me-5 " variant="primary" role="button">Entra al Boletín</Button>
                  </Link>
  
              </div>
              
              
              <div id = "ALDIA" style = {divLink}>
              <h4 style = {textStyle}> Consulta AlDía UNAL para noticias de nuestra sede</h4>
              <Link to = "https://aldiaunal.palmira.unal.edu.co/" style={{textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
              
              <Button id = "Btn-aldia" className = "mb-3 ms-5 me-5" variant="primary">Entra a AlDía</Button>
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
    <h1 className='big-tittle'> {dataPagina.paginas.data[0].attributes.nombre} </h1>
    <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '30px', marginTop: '45px'}}> Continuamente estamos trabajando para construir y fortalecer nuestra oferta de Educación Continua y Permanente con el fin de mejorar nuestro portafolio de servicios.
 
                </h4>  


    <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '30px', marginTop: '45px', marginBottom: '50px'}}> Conoce aquí los diplomados, cursos y talleres que tenemos para ti: 
 
                </h4>  
    
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
                              <h3>{seccion.attributes.titulo}</h3>
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
     <h1 className='big-tittle'>  Convocatorias</h1>
     <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '27px', marginTop: '20px',marginBottom: '50px'}}> Conoce las oportunidades para ti a través de nuestras convocatorias internas y externas.</h4>
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
              
              <div className = 'Banner-section'>
              <h1 className='banner-titulo'>  Vigilancia Tecnológica </h1>

              </div>
                 <section className='seccion' >
                 
                  <h1 className='Espacio-texto-titulo'> ¿Qué es la Vigilancia Tecnológica? </h1>
                  <h4 className = 'Espacio-texto'> La Vigilancia Tecnológica es un proceso sistemático de recolección, análisis y difusión de información científica, tecnológica y comercial relevante para apoyar la toma de decisiones estratégicas. 
                  </h4>
                  <h4 className = 'Espacio-texto'> En la Universidad Nacional de Colombia, sede Palmira, aplicamos esta metodología para identificar oportunidades de innovación, acompañar los procesos de protección de la propiedad intelectual, anticipar cambios en el entorno y fortalecer la competitividad de nuestros proyectos y alianzas.
                  </h4>
                  <h4 className = 'Espacio-texto'> Este proceso se aplica de manera continua, adaptándose a las necesidades específicas de cada desarrollo científico, tecnológico y los emprendimientos.
                  </h4>
              

              </section>
              <section className='seccion'> 
                 
              <h1 className='Espacio-texto-titulo'> Tipos de vigilancia</h1>
              <div  className="boxStyleW">
                          <div className="containervigilancia">
                                
                                <div className="divVigilancia">
                                    <h3 className> Vigilancia Científica </h3>
                                    <h5> Monitorea los avances en investigación y desarrollo dentro de áreas específicas de conocimiento.</h5>
                                    <div className='iconvig'>
                                          <img src ={vcientifica} width="130" height="130"></img>
                                    </div>

                                </div>
                                <div className="separatorvigilancia"></div>
                                <div className="divVigilancia">
                                    <h3> Vigilancia Tecnológica </h3>
                                    <h5> Se enfoca en la evolución de tecnologías emergentes y disruptivas que puedan impactar la industria.</h5>
                                    <div className='iconvig'>
                                          <img src ={vcomercial} width="130" height="130"></img>
                                    </div>

                                </div>
                                <div className="separatorvigilancia"></div>
                                <div className="divVigilancia">
                                    <h3> Vigilancia Comercial </h3>
                                    <h5> Analiza el mercado y la competencia para identificar oportunidades y amenazas.</h5>
                                    <div className='iconvig'>
                                          <img src ={vtecno} width="130" height="130"></img>
                                    </div>



                                </div>
                          </div>
                                     
                 </div>
                
              </section>
              <section className='seccion'> 
              
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
              
              
              </section>
              
        </div>

    )

}if (page === "/propiedad"){
   return(
    <div className="AlternaColorP"> 
       <section className='seccionP'> 
            
                <h1 style = {{textAlign:'center', paddingTop: '50px',paddingBottom: '50px', color: '#2F2468', fontSize: '60px'}}> ¿Sabes qué es la propiedad intelectual?
                </h1> 
                <h4 style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '27px'}}> Es un derecho complejo de dominio especial sobre las creaciones del talento humano que se concede a los autores o inventores y simultáneamente permite a la sociedad hacer uso de esas creaciones. 
                </h4>  
                 
                <Link to = "https://calendar.app.google/ZLeEPJS83B4fh3C79" style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}>
                      conoce articulo 035
                </Link>
            


       </section>
       <section className='seccionP'>
          <div className='blanco'> 
                    <h1 style = {{textAlign:'center', paddingTop: '5px',marginTop: '45px',paddingBottom: '5px', color: 'white', fontSize: '58px',backgroundColor:'orange', borderRadius:'20px'}}> ¿Por qué es importante la Propiedad Intelectual?
                    </h1>
                    <h4  style= {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '27px', color: 'white', marginTop: '45px'}}> Es misión de la Universidad la asimilación crítica y la creación de conocimiento, la conservación y uso sostenible de la biodiversidad, el desarrollo de sistemas autónomos de generación de conocimiento, de arte y de cultura nacional e internacional para el beneficio y uso de la sociedad.</h4>
                    <br></br>
                    <h4  style = {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '27px', color: 'white'}}> La Universidad propenderá porque cualquier derecho resultante de la producción intelectual, sea utilizado de manera coherente con el interés público, la función social y ecológica de la propiedad y en general con la Constitución Política de Colombia.</h4> 
         </div>
       </section>
       <section className='seccionP'> 
            <div className='naranja'>
            <h1 style = {{textAlign:'center', paddingTop: '50px',paddingBottom: '50px', color: '#2F2468', fontSize: '60px'}}> conoce más de la propiedad intelectual aquí:
            </h1> 
            
              <Videos />
              <h4  style= {{textAlign:'left',paddingLeft: '8%', paddingRight: '8%', fontSize: '27px', marginTop: '45px'}}>Para conocer más información o asesoría comuníquese al correo:  <Link to = "https://calendar.app.google/ZLeEPJS83B4fh3C79" style = {{textAlign:'left',paddingLeft: '0%', paddingRight: '0%', fontSize: '30px'}}>
                    Gestionpi_pal@unal.edu.co
               </Link> </h4>
            </div>
        
        </section> 
    
    </div>
    

   )

  }if(page === "/item"){
    const bulletListA = ['Asesoramiento en la incubación de proyectos',
      'Protección de la propiedad intelectual',
      'Vigilancia tecnológica',
      'Desarrollo de modelos de negocio',
      'Capacitación y mentoría'

    ]
    const bulletListB = [
      'Estudiantes de pregrado y posgrado',
      'Profesores e investigadores',
      'Egresados',
      'Entidades públicas y privadas'

    ]
    const data ={
        items: bulletListA,
        clase: 'itemBlueSuare'

    };
    const dataB = {
      items: bulletListB,
      clase: 'itemBlueSuare'
    }
    
    return(
      <div>
      <div   style ={{backgroundColor : '#E2E2E2',paddingBottom: '0px', paddingTop: '0px'}}>
      <section className='HeroSection' >
           
           <div className='item-hero-left'>
                  <div className='item-hero-bg-img-left'>
                      <img src ="https://res.cloudinary.com/dmlhbcigt/image/upload/v1721584301/cutted_Right_a2dd3af1ed.jpg" width="100%" height="600px"></img>
                    </div>
                  <div className='item-hero'></div> 
           </div>
           
           <div className='item-hero-right'>
                <div id = 'hero-move' 
                ref={heroMoveRef}
                className={`hero-border ${isVisible ? 'visible' : 'hidden'}`}
                > 
                <h1 style = {{textAlign:'center', paddingTop: '0px',marginTop: '45px',paddingBottom: '5px', color: 'white', fontSize: '72px'}}> Incubadora de emprendimientos
                </h1>
                <h4  style= {{textAlign:'left',paddingLeft: '10%', paddingRight: '8%', fontSize: '27px', color: 'white', marginTop: '45px', marginBottom: '45px'}}> Universidad Nacional de Colombia - Sede Palmira</h4>          

                </div>

           </div>
   
      </section>
      </div>
      <div style = {{backgroundColor : 'whitesmoke',paddingTop: '20px'}}>
      <section className='ItemSection' >

              
              
              <div className = 'item-slide-text' >
              
                      <div className='cyan-top-border'>
                      <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '45px',paddingBottom: '5px', color: '#17c8cc', fontSize: '72px'}}> 
                         ITEM
                      </h1>
                      <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                      La Incubadora de Emprendimientos de la Universidad Nacional de Colombia - Sede Palmira, es una iniciativa destinada a fomentar y apoyar la creación de empresas derivadas de la investigación y el conocimiento generado en la universidad. 
                      </h4>
                      <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px', color :'#0C1060',paddingBottom: '65px'}}> 
                      A través de un proceso estructurado, brindamos acompañamiento en la incubación de proyectos, protección de la propiedad intelectual, vigilancia tecnológica y desarrollo de modelos de negocio.
                      </h4>
                      </div>
              </div>
              
              
              


      </section>
      </div>
      <section style ={{backgroundColor : '#E2E2E2', paddingTop: '90px',paddingBottom:'50px', display: 'flex', flexDirection: 'row',height:'auto'}}>
              
              
              <div className='item-image-left'>
                    
                    <img src ="https://res.cloudinary.com/dmlhbcigt/image/upload/v1721698608/DSC_00680_e7853cb85d.jpg" width="100%" height="100%"></img>
              </div>
              <div>
              <h4 style = {{textAlign:'center',paddingLeft: '0.5%', paddingRight: '1%', fontSize: '40px',marginBottom: '4%'}}> 
                    <span style = {{color: '#0C1060'}}>¿Qué servicio </span>  <span style = {{color: '#17c8cc'}}>ofrecemos  ? </span>
              </h4>
              <Squarebulletlist data = {data} />
              </div>

      </section>
      <section style ={{backgroundColor : 'whitesmoke', paddingTop: '90px',paddingBottom:'50px', display: 'flex', flexDirection: 'row',height:'auto'}}> 
          <div className = "text-left">
              <h4 style = {{textAlign:'center',paddingLeft: '0%', paddingRight: '0%', fontSize: '40px',marginBottom: '4%'}}> 
                    <span style = {{color: ' #17c8cc'}}>Este servicio está </span>  <span style = {{color: '#0C1060'}}> dirigido a: </span>
              </h4>
              <Squarebulletlist data = {dataB} />
          </div>
          <div id = 'invertImage' className='item-image-left'>
                    
                    <img src ="https://res.cloudinary.com/dmlhbcigt/image/upload/v1721707949/DSC_03187_e6b2381317.jpg" width="100%" height="100%"></img>
          </div>
        
        </section>
        <section >
                  <div className='item-full-width-img'>
                      
                      <VisibleOnScroll className="overlay">
                            <div id = 'ItemdivBoton'>

                            <h4 style = {{textAlign:'center',paddingLeft: '0%', paddingRight: '0%', fontSize: '40px',marginBottom: '4%'}}> 
                                  <span style = {{color: '#0C1060'}}>Cómo pueden acceder </span>  <span style = {{color: '#17c8cc'}}> a este servicio: </span>
                            </h4>
                            <p style = {{textAlign:'left',paddingLeft: '0%', paddingRight: '0%', fontSize: '20px',marginBottom: '4%',color: '#0C1060',fontWeight:'bold'}}> 
                                  Estudiantes, profesores, investigadores y egresados de la Universidad Nacional de Colombia pueden acceder a los servicios de la Incubadora de Emprendimientos agendado su cita aquí:
                            </p>
                                <Link to = 'https://calendar.app.google/ZLeEPJS83B4fh3C79' id = 'item-cita-boton'><Button id = 'ItemButton' size="lg">
                                            Agendar Cita
                                </Button>
                            </Link>
                            
                            


                            </div>
                      </VisibleOnScroll>

                  </div>
                  
                  
                  

                  
        </section>
        <section id = "Emprendimientos-seccion">
        <div className = 'item-slide-text'  >
              
              <div className='cyan-top-border'>
              <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '45px',paddingBottom: '5px'}}> 
                      <span style ={{fontSize: '40px', color: '#0C1060'}}>¿Qué son los </span> <span style ={{fontSize: '40px', color: '#17c8cc'}}>emprendimientos tecnológicos?</span>
              </h1>
              <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
              Los emprendimientos tecnológicos, también conocidos como spin-off, son empresas derivadas de la investigación académica que buscan comercializar tecnologías, productos o servicios innovadores. 
              </h4>
              <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px', color :'#0C1060',paddingBottom: '65px'}}> 
              Estas empresas utilizan el conocimiento y la tecnología desarrollada en la universidad para crear soluciones que tienen un impacto significativo en el mercado.
              </h4>
              <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '45px',paddingBottom: '5px'}}> 
                            <span style ={{fontSize: '40px', color: '#17c8cc'}}>Conoce nuestros </span> <span style ={{fontSize: '40px', color: '#0C1060'}}>emprendimientos</span>
              </h1>
              <div id = "logoMenu"> 
                    <Link to = "#menu-tab-sehom"  className='logoDiv'> <div id = "SEHOM" className='logo-space'></div></Link>
                    <Link to = "#menu-tab-ferti"  className='logoDiv'>  <div id = "fertirayo" className='logo-space'></div></Link>


              </div>
              </div>
              
      </div>   

        </section>
        <section >
        <div ref = {startSectionRef}></div>
        <div id="item-tab-section-blue"></div>
              
                
                    <div id ="menu-tab-sehom"></div>
                    <Tab.Container id="menu-tab" defaultActiveKey="s2link1">
                    
                         
                          <Nav className='menu-tab-space-nav' variant="tabs">
                            <div className='menu-tab-space'>
                              <Nav.Item className='menu-tab-space-button-nav-button'>
                                <Nav.Link eventKey="s2link1">Información General</Nav.Link>
                              </Nav.Item>
                              
                          
                          
                              <Nav.Item className='menu-tab-space-button-nav-button'>
                                <Nav.Link eventKey="s2link2">Servicios que ofrece</Nav.Link>
                              </Nav.Item>
                              
                          
                          
                              <Nav.Item className='menu-tab-space-button-nav-button'>
                                <Nav.Link eventKey="s2link3">Interesados</Nav.Link>
                              </Nav.Item>
                              
                                                    
                              <Nav.Item className='menu-tab-space-button-nav-button'>
                                <Nav.Link eventKey="s2link4">Contacto</Nav.Link>
                              </Nav.Item>
                              </div>     
                          </Nav>
                          
                       
                    
                    <Tab.Content>
                          <Tab.Pane eventKey="s2link1">
                             <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                                <div className='cyan-top-border'>
                                   <div id = "SEHOM" className='logo-space'>

                                   </div>
                                   <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '5px', color: '#17c8cc', fontSize: '50px'}}> 
                                                     SEHOME
                                    </h1>
                                    <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                                    SEHOME es una empresa dedicada a la comercialización de semillas de hortalizas de alta calidad, desarrolladas a partir de investigaciones realizadas por el grupo de Investigación mejoramiento y agronomía de semillas de hortalizas de la sede Palmira.
 
                                    </h4>
                                    <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px', color :'#0C1060',paddingBottom: '65px'}}> 
                                    <span style = {{color: '#17c8cc'}}>Área asociada:</span> Agricultura Variedades vegetales.
                                    </h4>

                                </div>


                             </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="s2link2">
                             <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                                <div className='cyan-top-border'>
                                   <div id = "SEHOM" className='logo-space'>

                                   </div>
                                   <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '65px', color: '#17c8cc', fontSize: '50px'}}> 
                                                Servicios que ofrece:
                                    </h1>
                              
                                    <div className="SquareBulletList">
                                      <ul>    
                                    <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                                    Venta de semillas de hortalizas.
 
                                    </h4>
                                    </li>
                                    <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                      Asesoramiento técnico en cultivo y manejo de hortalizas.
                                    </h4>
                                    </li>
                                    <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                      Investigación y desarrollo en biotecnología aplicada a la agricultura.
                                    </h4>
                                    </li>
                                   
                                    </ul>
                                    </div>
                                          
                                    
                                    

                                </div>


                             </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="s2link3">
                             <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                                <div className='cyan-top-border'>
                                   <div id = "SEHOM" className='logo-space'>

                                   </div>
                                   
                                          
                                    <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '65px', color: '#17c8cc', fontSize: '50px'}}> 
                                          Interesados:
                                    </h1>
                                    <div className="SquareBulletList">
                                      <ul style ={{marginBottom: '50px'}}>    
                                    <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                                    Agricultores y productores agrícolas.
 
                                    </h4>
                                    </li>
                                    <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                    Empresas del sector agroindustrial.
                                    </h4>
                                    </li>
                                    <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                        Instituciones de investigación y desarrollo agrícola.
                                    </h4>
                                    </li>
                                   
                                    </ul>
                                    </div>

                                </div>


                             </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="s2link4">
                             <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                                <div className='cyan-top-border'>
                                   <div id = "SEHOM" className='logo-space'>

                                   </div>
                                   
                                         
                                    <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '65px', color: '#17c8cc', fontSize: '50px'}}> 
                                          Contacto :
                                    </h1>
                                    <h4 style = {{textAlign:'left',paddingLeft: '2%', marginLeft: '20%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                         Correo electrónico: <a href = '#'>sehome.pal@gmail.com </a>
                                    </h4>
                                    <div style ={{marginLeft: '10%',width: '50% '}}>
                                    <Link to = '#Emprendimientos-seccion' id = 'item-cita-boton'>
                                      <Button id = 'ItemButton' size="lg">
                                            Ver mas emprendimientos
                                      </Button>
                                    </Link>
                                    </div>
                                    <div style ={{height: '100px',backgroundColor: 'white',opacity:'0'}}></div>

                                </div>


                             </div>
                          </Tab.Pane>



                    </Tab.Content>
                    </Tab.Container> 
                    
                   
              
              
              
            
            
                <div id="item-tab-section-blue"></div>
              
                <div id ="menu-tab-ferti"></div>
                <Tab.Container id="menu-tab" defaultActiveKey="s1link1">
                    
                         
                    <Nav className='menu-tab-space-nav' variant="tabs">
                      <div className='menu-tab-space'>
                        <Nav.Item className='menu-tab-space-button-nav-button'>
                          <Nav.Link eventKey="s1link1">Información General</Nav.Link>
                        </Nav.Item>
                        
                    
                    
                        <Nav.Item className='menu-tab-space-button-nav-button'>
                          <Nav.Link eventKey="s1link2">Servicios que ofrece</Nav.Link>
                        </Nav.Item>
                        
                    
                    
                        <Nav.Item className='menu-tab-space-button-nav-button'>
                          <Nav.Link eventKey="s1link3">Interesados</Nav.Link>
                        </Nav.Item>
                        
                                              
                        <Nav.Item className='menu-tab-space-button-nav-button'>
                          <Nav.Link eventKey="s1link4">Contacto</Nav.Link>
                        </Nav.Item>
                        </div>     
                    </Nav>
                    
                 
              
              <Tab.Content>
                    <Tab.Pane eventKey="s1link1">
                       <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                          <div className='cyan-top-border'>
                             <div id = "fertirayo" className='logo-space'>

                             </div>
                             <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '5px', color: '#17c8cc', fontSize: '50px'}}> 
                                               FERTIRAYO
                              </h1>
                              <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                              FertiRayo es un software innovador que genera planes de fertilización personalizados, optimizados según las condiciones específicas del suelo, contribuyendo a una agricultura más eficiente y sostenible.

                              </h4>
                              <h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px', color :'#0C1060',paddingBottom: '65px'}}> 
                              <span style = {{color: '#17c8cc'}}>Área asociada:</span> Agricultura - TICs.
                              </h4>

                          </div>


                       </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="s1link2">
                       <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                          <div className='cyan-top-border'>
                             <div id = "fertirayo" className='logo-space'>

                             </div>
                             <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '65px', color: '#17c8cc', fontSize: '50px'}}> 
                                          Servicios que ofrece:
                              </h1>
                        
                              <div className="SquareBulletList">
                                <ul>    
                              <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                              Desarrollo de planes de fertilización personalizados.

                              </h4>
                              </li>
                              <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                              Análisis de suelo y recomendaciones agronómicas.
                              </h4>
                              </li>
                              <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                              Software de gestión agronómica.
                              </h4>
                              </li>
                             
                              </ul>
                              </div>
                                    
                              
                              

                          </div>


                       </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="s1link3">
                       <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                          <div className='cyan-top-border'>
                             <div id = "fertirayo" className='logo-space'>

                             </div>
                             
                                    
                              <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '65px', color: '#17c8cc', fontSize: '50px'}}> 
                                    Interesados:
                              </h1>
                              <div className="SquareBulletList">
                                <ul style ={{marginBottom: '50px'}}>    
                              <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color : '#0C1060'}}> 
                              Agricultores y productores agrícolas.

                              </h4>
                              </li>
                              <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                              Empresas del sector agroindustrial.
                              </h4>
                              </li>
                              <li><h4 style = {{textAlign:'left',paddingLeft: '2%', paddingRight: '1%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                              Consultores y técnicos agronómicos.
                              </h4>
                              </li>
                             
                              </ul>
                              </div>

                          </div>


                       </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="s1link4">
                       <div style = {{width: '100%',height: 'auto',backgroundColor: 'white',}}>
                          <div className='cyan-top-border'>
                             <div id = "fertirayo" className='logo-space'>

                             </div>
                             
                                   
                              <h1 style = {{textAlign:'center', paddingLeft: '8%', paddingRight: '20%',paddingTop: '5px',marginTop: '0px',paddingBottom: '65px', color: '#17c8cc', fontSize: '50px'}}> 
                                    Contacto :
                              </h1>
                              <h4 style = {{textAlign:'left',paddingLeft: '2%', marginLeft: '20%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                   Correo electrónico: <a href = '#'>sehome.pal@gmail.com </a>
                              </h4>
                              <h4 style = {{textAlign:'left',paddingLeft: '2%', marginLeft: '20%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                              Teléfono: <a href = '#'>+(57) 317 490 8114 +(57) 315 771 0953 </a>
                              </h4>
                              <h4 style = {{textAlign:'left',paddingLeft: '2%', marginLeft: '20%', fontSize: '27px',marginBottom: '2%', color :'#0C1060'}}> 
                                   Sitio web: <a href = 'https://fertirayo.com/como-funciona/'>https://www.fertirayo.com </a>
                              </h4>
                              <div style ={{marginLeft: '10%',width: '50% '}}>
                              <Link to = '#Emprendimientos-seccion' id = 'item-cita-boton'>
                                <Button id = 'ItemButton' size="lg">
                                      Ver mas emprendimientos
                                </Button>
                              </Link>
                              </div>
                              <div style ={{height: '100px',backgroundColor: 'white',}}></div>

                          </div>


                       </div>
                    </Tab.Pane>



              </Tab.Content>
              </Tab.Container> 
                
            
            
            
         

        
        <div id="item-tab-section-blue"></div>
        <div ref = {endSectionRef}></div>
            
      
    </section>
       

       
          
      
      
      </div>
    )
  }
  if(page ==='/tecnologias'){
      
    return (

        <section >
            <div class="naranja">
              <h1 className='big-tittle'> Cifras y Proyectos Destacados </h1>
              <h4 className='big-text'>Conoce mas información sobre nuestros procesos técnologicos:</h4>
              <div  className = "contenedor-counter">
              <div className="CounterRow">
                    <Counter id="counter1" color="#3A9FE3" limit={5} text="Proyectos Activos" 
                    popoutText="Actualmente, contamos con 5  procesos de acompañamiento, para la protección de la propiedad intelectual y el escalamiento de tecnologías, acompañamos los desarrollos de base científica y tecnológica a identificar su potencial, los procesos similares que se encuentran en el entorno, la viabilidad de la protección y su factibilidad de comercialización." />
                    <div style={{ height: '100px', width: '2px', borderLeft: 'medium solid #0C6466', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}></div>
                    <Counter id="counter2" color="#2F2468" limit={42} text="Tecnologías Desarrolladas" 
                    popoutText="Hemos desarrollado y realizado el acompañamiento de trámites de propiedad intelectual de cerca de 42  tecnologías innovadoras.
" />
                    <div style={{ height: '100px', width: '2px', borderRight: 'medium solid #0C6466', marginTop: '20px', marginRight: '20px', marginLeft: '20px' }}></div>
                    <Counter id="counter3" color="#17C8CC" limit={8} text="Alianzas Estratégicas" 
                    popoutText="Colaboramos con más de 8 instituciones y empresas nacionales e internacionales para el desarrollo de proyectos conjuntos de alto impacto.
" />
                  </div>
             </div>
             </div>
             <div style = {{ height: 'auto'}} >
              <div style = {{backgroundColor:'rgb(231, 230, 237)',height:'170px'}}>
             <h1 style = {{textAlign:'center', paddingTop: '110px',paddingBottom: '50px', color: '#2F2468', fontSize: '50px'}}>
              
              Nuestras técnologias
              
              </h1>
              </div>
              <div>
                  <SidebarMenu />
              </div>

             </div>

        </section>
    )

  }if(page ==='/laboratorios'){

    return(
      <div>
      <div id = "bannerAgricolas"></div>

      <div className='AlternaColor'> 

        <section className='seccion'>
        <div class="naranja">
          <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px', color: 'rgb(47, 36, 104)', fontSize: '80px'}}> 
            Laboratorios
          </h1>
          <h4 style={{textAlign: 'left', paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}> 
          En la Dirección de Investigación y Extensión de la Sede Palmira, ofrecemos una amplia gama de servicios de laboratorio diseñados para respaldar la investigación y promover la innovación.
          </h4>
          <h4 style={{textAlign: 'left', paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}> 
          Nuestros laboratorios cuentan con equipos de última generación y personal altamente capacitado para llevar a cabo análisis en diversas áreas. Nuestros servicios de laboratorio brindan el apoyo necesario para impulsar el progreso académico y contribuir al desarrollo de soluciones para los desafíos actuales y futuros. 
          </h4>
            
          </div>
          

        </section>
        <section className='seccion'>
              <div className='azul'>
              <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px', color: 'rgb(47, 36, 104)', fontSize: '50px'}}> 
                      Conoce los Laboratorios de la sede Palmira:
              </h1> 
              <Lablist></Lablist>            

              </div>
              
        </section>
      </div>
      </div>      
    )
  }if(page === '/semilleros'){

    return(
      <div className='AlternaColor'> 

      <section className='seccion'>
      <div class="naranja">
        <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px', color: 'rgb(47, 36, 104)', fontSize: '80px'}}> 
           ¿Qué es un semillero?

        </h1>
        <h4 style={{textAlign: 'left', paddingLeft: '8%', paddingRight: '8%', fontSize: '30px'}}> 
        Los semilleros de investigación, creación, extensión solidaria o innovación en la Universidad Nacional de Colombia son espacios extracurriculares de formación científica, investigativa, innovativa y creativa de estudiantes mediante la generación de un ambiente de trabajo colaborativo propicio para reflexionar, debatir, conocer y aplicar diferentes métodos, metodologías y técnicas de investigación.
        </h4>
        
          
        </div>
        

      </section>
      <section className='seccion'>
            <div className='azul'>
            <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px', color: 'rgb(47, 36, 104)', fontSize: '80px'}}> 
            ¿Quién conforma un grupo semillero?

        </h1>
        <h4 style={{textAlign: 'left', paddingLeft: '8%', paddingRight: '8%', fontSize: '30px', marginBottom: '58px'}}> 
        En la Universidad Nacional de Colombia, los semilleros de investigación, creación, extensión solidaria o innovación están integrados por estudiantes de pregrado o posgrado, que cuentan con la guía de docentes de la Universidad y se constituyen con el propósito de estimular la vocación investigativa o creativa de los estudiantes en torno a problemas o áreas temáticas que convocan a los integrantes del semillero.
        </h4>


            </div>
            
      </section>
      <section className = 'seccion'>
          <div class className="naranja">
          <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px', color: 'rgb(47, 36, 104)', fontSize: '80px'}}> 
          Cifras Sede Palmira</h1>
        <div className = "estadistica">
              <SemillerosNumeros /> 
              <GraficoBarras />
              <GraficoPie />
               
              

        </div>
        

        

          </div>
          
          
        
      </section>
      <section className='seccion'>
            <div class className="azul">

            <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px', color: 'rgb(47, 36, 104)', fontSize: '80px'}}> 
            Instructivo del modulo hermes


        </h1>
        <VisibleOnScroll className="overlay-semi">
                            <div id = 'ItemdivBoton'>

                            
                            <p style = {{textAlign:'left',paddingLeft: '0%', paddingRight: '0%', fontSize: '27px',marginBottom: '4%',color: '#0C1060',fontWeight:'bold'}}> 
                            Consultar el manual instructivo del módulo de Semilleros del Sistema de Información Hermes:
                            </p>
                                <Link to = 'http://www.hermes.unal.edu.co/pages/html/descargas/instructivo.xhtml?id=194' 
                                id = 'Semi-inst-boton'><Button id = 'SemiButton' size="lg">
                                            Ingerese al instructivo
                                </Button>
                            </Link>
                            
                            


                            </div>
                      </VisibleOnScroll>


            </div>

      </section>
    </div>
         
    )
  }
}
