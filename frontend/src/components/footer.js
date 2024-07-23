import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
import logo_agenc from "../images/log_agenc.png"
import logo_contra from "../images/log_contra.png"
import logo_gobiern from "../images/log_gobiern.png"
import logo_orgullo_black from "../images/log_orgullo_black.png"
import logo_orgullo from "../images/log_orgullo.png"
import logo_agenc_black from "../images/log_agenc_black.png"
import './unal.css'

export default function Footer() {
  return (
    <div className='footer'>
      
      <Container className = "d-print-table" fluid>
          <Row>
            <Col sm ={6} md = {3} className= "d-print-none">
            
                  <Nav className="gobiernoLinea">

                          <Link to = "http://www.legal.unal.edu.co" target="_top">Régimen Legal</Link>
                          <Link to = "http://personal.unal.edu.co" target="_top">Talento humano</Link>
                          <Link to = "https://portaladquisiciones.unal.edu.co" target="_top">Contratación</Link>
                          <Link to = "http://personal.unal.edu.co" target="_top">Ofertas de empleo</Link>
                          <Link to = "http://launalcuenta.unal.edu.co/" target="_top">Rendición de cuentas</Link>
                          <Link to = "http://docentes.unal.edu.co/concurso-profesoral/" target="_top">Concurso docente</Link>
                          <Link to = "http://www.pagovirtual.unal.edu.co/" target="_top">Pago virtual</Link>
                          <Link to = "http://controlinterno.unal.edu.co/" target="_top">Control interno</Link>
                          <Link to = "http://siga.unal.edu.co" target="_top">Calidad</Link>
                          <Link to = "https://unal.edu.co/buzon-de-notificaciones/" target="_self">Buzón de notificaciones</Link>


                  </Nav>
            

            </Col>
            < Col sm ={6} md = {3} className="d-print-none">
               <Nav className="gobiernoLinea"> 
                        <Link to="https://smartkey.xertica.com/cloudkey/a/unal.edu.co/user/login" target="_top">Correo institucional</Link>
                        <Link to="/mapa-del-sitio">Mapa del sitio</Link>
                        <Link to="http://redessociales.unal.edu.co" target="_top">Redes sociales</Link>
                        <Link to="/faq">Preguntas frecuentes</Link>
                        <Link to="http://quejasyreclamos.unal.edu.co" target="_self">Quejas y reclamos</Link>
                        <Link to="https://unal.edu.co/atencion-en-linea/" target="_self">Servicios en línea</Link>
                        <Link to="/egresados">Encuesta</Link>
                        <Link to="/contactenos">Contáctenos</Link>
                        <Link to="http://estadisticas.unal.edu.co/" target="_top">Estadísticas</Link>
                        <Link to="/glosario">Glosario</Link>
              </Nav>

            </Col>
            < Col sm ={7} md = {4} className="contder">
                 <Col className='contacto'>
                        <p>Contacto página web:
                        <br></br>
                        Carrera 45 # 26-85
                        <br></br>
                        Edif. Uriel Gutiérrez
                        <br></br>
                        Bogotá D.C.,  Colombia
                        <br></br>
                        (+57 601)  316 5000

                      </p>
                 </Col>
                 <Col className='derechos'>
                        <Link to="https://unal.edu.co/fileadmin/user_upload/docs/legal.pdf" target="_blank">© Copyright 2021</Link>
                        <br></br>Algunos derechos reservados.<br></br>
			                  <Link to="/contactenos">Contáctenos</Link><br></br>
			                  <Link to="">Acerca de este sitio web</Link><br></br> Actualización: 23/07/2024


                 
                 </Col>
            
            </Col>
            <Col  sm ={5} md = {2} className='asoc-img'>
                <Container>
                    <Row className ="row-cols-2">

                        <Col>
                            <Link href="http://orgullo.unal.edu.co/">
                                <img className="img-fluid" alt="Orgullo UN" src={logo_orgullo} width="94" height="37"></img>
                                <img className="d-none d-print-block img-fluid" alt="Orgullo UN" src={logo_orgullo_black} width="94" height="37"></img>
                            </Link>
                        </Col>
                        <Col>
                                <Link to = "https://www.gov.co/"> <img className="img-fluid" alt="Portal Único del Estado Colombiano" src={logo_gobiern} width="94" height="37"></img>
                                </Link>
                        </Col>
                        <Col>
                        <Link className="imgAgencia" href="http://agenciadenoticias.unal.edu.co">
                            <img className ="img-fluid" alt="Agencia de Noticias" src={logo_agenc} width="94" height="37"></img>
                            <img className ="d-none d-print-block" alt="Agencia de Noticias" src={logo_agenc_black} width="94" height="37"></img>
                        </Link>
                        
                        </Col>
                        <Col>
                        <Link href="http://www.contaduria.gov.co/">
				                    <img className = "img-fluid" alt="Contaduría General de la República" src={logo_contra} width="94" height="37"></img>
				                 </Link>

                        
                        </Col>


                        
                        


                    </Row>

                </Container>
            
            </Col>

          </Row>
       </Container>
      
    </div>
     
  )
}
