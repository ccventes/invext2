import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const MENUITEMS = gql`
query GetMenunav {
  menunav {
    data {
      attributes {
        nav {
          __typename
          ... on ComponentMenuDropdown {
            id
            titulo
            otrocampo
            paginas{
              data{
                id
                attributes
                {
                  nombre
                  url
                }
              }
            }
            
            
            
            # Aquí puedes incluir más campos específicos de ComponentMenuDropdown
          }
          ... on ComponentMenuSingle {
            id
            titulo
            url
            # Aquí puedes incluir más campos específicos de ComponentMenuSingle
          }
        }
      }
    }
  }
}	
`


export default function Navigation() {
  const{loading, error, data} = useQuery(MENUITEMS);
  if (loading) return <p>Loading...</p>
  if(error) return <p>Error :</p>
  console.log("los botones de menunav son " +  JSON.stringify(data, null, 2));
  return (
    
    <div>
     <Navbar className='custom-navbar' data-bs-theme="dark">
        
          
          <Nav className="me-auto ">
          {data.menunav.data.attributes.nav.map(item => {
        if (item.__typename === 'ComponentMenuSingle') {
          return (
            <div key={item.id + '-single'}>
              <Nav.Link href={item.url}>{item.titulo}</Nav.Link>
              {/* Renderiza otros campos específicos de ComponentMenuDropdown aquí */}
            </div>
          );
        } else if (item.__typename === 'ComponentMenuDropdown') {
          console.log("Paginas de dropdown item: ", item.paginas.data); // Añadido para depuración
          return (
            <NavDropdown key={item.id + '-dropdown'} title={item.titulo} id={"navbarScrollingDropdown" + item.id}>
              {item.paginas.data.map(pag => (
                <NavDropdown.Item key={pag.id} href={pag.attributes.url}>
                  {pag.attributes.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          );
        } else {
          return null;
        }
      })}
            
          </Nav>
        
      </Navbar>
    </div>
  )
}
