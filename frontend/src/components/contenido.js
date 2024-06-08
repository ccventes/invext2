import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoticiasMockup from '../images/noticias_unal_mockup.png';

const SECCIONES = gql`
  query GetSection {
    seccions {
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


export default function Contenido({page}) {
  const { loading, error, data } = useQuery(SECCIONES);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("Estoy en contenido, la pagina es: ", {page})
  console.log("Los datos de secciones son: ", JSON.stringify(data, null, 2));
  if(page === 'index'){
  console.log("voy a renderizar index");
  return (
    <section>
      <Container>
        <Row className= 'mt-4'>
            <Col md={1}></Col>
            <Col md={7}>
                {
                    data.seccions.data.map((item) => (
                        <div key={item.id}>
                        <h2>{item.attributes.titulo}</h2>
                        <div dangerouslySetInnerHTML={{ __html: item.attributes.ContenidoHTML }} />
                    </div>
                    ))
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
}else{
  console.log("Aqui voy a renderizar diplomodos:", page )
  return(
    <section> 
      <p></p>
      <h1> aqui va diplomados </h1>
    </section>
  );
  
}
  
}
