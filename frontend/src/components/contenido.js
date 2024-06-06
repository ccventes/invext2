import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SECCIONES = gql`
  query GetSection {
    seccions {
      data {
        id
        attributes {
          titulo
          Contenido
          ContenidoHTML
        }
      }
    }
  }
`;

export default function Contenido() {
  const { loading, error, data } = useQuery(SECCIONES);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("Los datos de secciones son: ", JSON.stringify(data, null, 2));

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
            <Col md={4}></Col>
        </Row>
      </Container>
      
    </section>
  );
}
