// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import './unal.css';
import { Link } from "gatsby"

const Sidebar = () => {
    const [scrollPosition, setScrollPosition] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
          const div1Rect = document.getElementById('Estudiantes').getBoundingClientRect();
          const div2Rect = document.getElementById('Empresas').getBoundingClientRect();
          const div3Rect = document.getElementById('SelectorInicio').getBoundingClientRect();
         
          const scrollY = window.scrollY;
    
          if (scrollY <= div3Rect.bottom ){
            setScrollPosition('Invisible');
          }
          else if (scrollY >= div1Rect.top && scrollY < div1Rect.bottom) {
            setScrollPosition('Estudiantes');
          } else if (scrollY >= div2Rect.top ) {
            setScrollPosition('Empresas');
          } 
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    return (
        <div className={`sidebar ${scrollPosition !== 'Invisible' ? '' : 'hidden'}`}>
            
            <ul>
                <li>Scroll Y: {scrollPosition} </li>
                <li><Link to="#Estudiantes">Para Estudiantes</Link></li>
                <li><Link to="#Empresas">Para Entidades o Empresas</Link></li>
                <li><Link to="#SelectorInicio">Volver al inicio</Link></li>
                
            </ul>
        </div>
    );
}

export default Sidebar;
