// src/components/Sidebar.js
import React, { useState, useEffect,useRef } from 'react';
import './unal.css';
import { Link } from "gatsby"

const Sidebar = () => {
    const [scrollPosition, setScrollPosition] = useState(null);
    const[fix,setFixe] =useState(null);
    const [YpositionScroll, setYScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
        const div1Rect = document.getElementById('Estudiantes').getBoundingClientRect();
        const div2Rect = document.getElementById('Empresas').getBoundingClientRect();
        const div3Rect = document.getElementById('SelectorInicio').getBoundingClientRect();
          
         
        const scrollY = window.scrollY;
          
          setYScrollPosition(scrollY);
          if(scrollY < div1Rect.bottom){
             setFixe('Fixed');
          }
          else{
            setFixe('');
          }
          if(scrollY <= div3Rect.bottom ){
            setScrollPosition('Invisible');
          }
          else if (scrollY >= div1Rect.top && scrollY < div1Rect.bottom) {
            setScrollPosition('Estudiantes');
          } else if (scrollY >= div2Rect.top ) {
            setScrollPosition('Empresas');
          } 
          setYScrollPosition(scrollY); //
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  



    
    return (
        <div className={`sidebar ${scrollPosition !== 'Invisible' ? '' : 'hidden'} ${fix === 'Fixed' ? 'Fixed' : ''}`}>
            
            <ul>
                <li>estado: {fix} scroll element {scrollPosition} posy {YpositionScroll} </li>
                <li><Link to="#Estudiantes">Para Estudiantes</Link></li>
                <li><Link to="#Empresas">Para Entidades o Empresas</Link></li>
                <li><Link to="#SelectorInicio">Volver al inicio</Link></li>
                
            </ul>
        </div>
    );
}

export default Sidebar;
