import React from 'react'
import './unal.css'
import { Link } from "gatsby"
import colombiaImage from '../images/colombia2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';









export default function Header() {
  //const {loading, error,data} = useFetch('http://localhost:1337/graphql/')
  
  return (
    <section>
    <div className="firstMenu">
         <div className="logo"></div>
         <div className ="space"> </div>
         <ul className = "nav-superior">
              <li className = "item-nav"> <Link  to="/#">Aspirantes </Link></li>
              <li className = "item-nav"> <Link  to="/#">Egresados </Link></li>
              <li className = "item-nav"> <Link  to="/#">Estudiantes </Link></li>
              <li className = "item-nav"> <Link  to="/#">Docentes </Link></li>
              <li className = "item-nav"> <Link  to="/#">Administrativos </Link></li>

         </ul>
         <ul className = "socialLinks">
          <li className ="Links" ><Link className ="twitter"  to="/#"></Link></li>
          <li className ="Links" ><Link className ="facebook" to="/#"></Link></li>
          <li className ="Links" ><Link className ="youtube"  to="/#"></Link></li>
        </ul>
        
   </div>
   <div className = "MainMenu">
      <div className = "container">
          <div className = "navigation"> 
          <FontAwesomeIcon icon={faLocationDot} style={{color: "#e2e6ee",}} />
				  <Link id = "link-site"  to="/#"> Sitio Diepal </Link> 
          <Navigation></Navigation>

          </div>

      </div>
      <img alt="Escudo de la República de Colombia" src={colombiaImage} width="66" height="66" title="Escudo de la República de Colombia"/>

   </div>
   </section>
    
  )
}

