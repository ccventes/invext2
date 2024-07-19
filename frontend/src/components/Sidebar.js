// src/components/Sidebar.js
import React, { useState, useEffect,useRef } from 'react';
import './unal.css';
import { Link } from "gatsby"

const Sidebar = () => {
    const [scrollPosition, setScrollPosition] = useState(null);
    
    
    useEffect(() => {
        const handleScroll = () => {
        const div1Rect = document.getElementById('Estudiantes').getBoundingClientRect();
        const div2Rect = document.getElementById('Empresas').getBoundingClientRect();
        
          
         
          const scrollY = window.scrollY;
          
          //setYScrollPosition(scrollY);
         
         
         
          if (scrollY >= div1Rect.top && scrollY <= div1Rect.bottom) {
            setScrollPosition('Estudiantes');
          } else if (scrollY > div1Rect.bottom ) {
            setScrollPosition('Empresas');
          } 
          
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  



    
    return (
        <div className={'sidebar'}>
            
            <ul>
                {scrollPosition === 'Estudiantes' ? 
                  
                  <li className ="selected"><h4><Link to="#moddiv">Para Estudiantes</Link></h4></li>
                  :
                  <li><Link to="#moddiv">Para Estudiantes</Link></li>
                }
                {scrollPosition === 'Empresas' ? 
                  <li className ="selected"><h4><Link to="#Empresas">Para Entidades o Empresas</Link></h4></li>
                  :
                  <li><Link to="#Empresas">Para Entidades o Empresas</Link></li>
                }
                
                
                
                <li><Link to="#SelectorInicio">Volver al inicio</Link></li>
                
            </ul>
        </div>
    );
}

export default Sidebar;
