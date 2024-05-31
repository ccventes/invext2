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
            # Aquí puedes incluir más campos específicos de ComponentMenuDropdown
          }
          ... on ComponentMenuSingle {
            id
            titulo
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
  console.log("los datos son " +  JSON.stringify(data, null, 2));
  return (
    
    <div>
     <Navbar className='custom-navbar' data-bs-theme="dark">
        
          
          <Nav className="me-auto ">
          {data.menunav.data.attributes.nav.map(item => {
        if (item.__typename === 'ComponentMenuSingle') {
          return (
            <div key={item.id}>
              <Nav.Link>{item.titulo}</Nav.Link>
              {/* Renderiza otros campos específicos de ComponentMenuDropdown aquí */}
            </div>
          );
        } else if (item.__typename === 'ComponentMenuDropdown') {
          return (
            <div key={item.id}>
              <NavDropdown title={item.titulo} id={"navbarScrollingDropdown" + item.id}></NavDropdown>
            </div>
          );
        } else {
          return null;
        }
      })}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        
      </Navbar>
    </div>
  )
}
