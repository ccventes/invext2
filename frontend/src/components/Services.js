import React from 'react';
import './unal.css'
import icnServEmail from '../images/servicios/icnServEmail.png';
import icnServLibrary from '../images/servicios/icnServLibrary.png';
import icnServSia from '../images/servicios/icnServSia.png';
import iconbienestar from '../images/servicios/icon-bienestar.png';
import iconcontratacion from '../images/servicios/icon-contratacion.png';
import iconconvpersonal from '../images/servicios/icon-convoc-personal.png';
import iconeditorial from '../images/servicios/icon-editorial.png';
import iconniños from '..images/servicios/icon-niños.png';

export default function Services() {
  return (
    
        <div id="services" style={{right: '-285px;', height: '432px'}} className="">
	<div className="indicator">
	</div>
	<ul style={{height: '432px'}}>
		<li>
			<img src={icnServEmail} width="32" height="32" border="0" alt=""/>
			<a href="https://smartkey.xertica.com/cloudkey/a/unal.edu.co/user/login?namespace=unal.edu.co" target="_blank">Correo institucional</a>
		</li>
		<li>
			<img src={icnServSia} width="32" height="32" border="0" alt=""/>
			<a href="https://dninfoa.unal.edu.co" target="_blank">DNINFOA - SIA </a>
		</li>
		<li>
			<img src={icnServSia} width="32" height="32" border="0" alt=""/>
			<a href="http://www.hermes.unal.edu.co/" target="_blank">Sistema de Investigación y Extensión</a>
		</li>
		<li>
			<img src={iconbienestar} width="32" height="32" border="0" alt=""/>
			<a href="http://www.sibu.unal.edu.co/home.jsf" target="_blank">Sistema de Bienestar – SIBU</a>
		</li>
		<li>
			<img src={icnServLibrary} width="32" height="32" border="0" alt=""/>
			<a href="http://bibliotecas.unal.edu.co" target="_blank">Bibliotecas</a>
		</li>
      <li>
			<img src={iconconvpersonal} width="32" height="32" border="0" alt=""/>
			<a href="http://personal.unal.edu.co" target="_blank">Convocatorias</a>
		</li>
		<li>
			<img src={iconeditorial} width="32" height="32" border="0" alt=""/>
			<a href="http://www.editorial.unal.edu.co/" target="_blank">Editorial</a>
		</li>
		<li>
			<img src={iconcontratacion} width="32" height="32" border="0" alt=""/>
			<a href="http://contratacion.palmira.unal.edu.co/" target="_blank">Contratación</a>
		</li>
		<li>
			<img src={icnServSia} width="32" height="32" border="0" alt=""/>
			<a href="http://www.legal.unal.edu.co/" target="_blank">Régimen legal</a>
		</li>
      <li>
			<img src={iconeditorial} width="32" height="32" border="0" alt=""/>
			<a href="http://identidad.unal.edu.co/" target="_blank">Identidad U.N.</a>
		</li>
     		<li>
			<img src={iconniños} width="32" height="32" border="0" alt=""/>
			<a href="http://unal.edu.co/portal-para-ninos/" target="_blank">Portal para niños</a>
		</li>
      
	</ul>
</div>
      
    
  )
}
