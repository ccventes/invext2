import React, { useState, useEffect } from 'react';
import './unal.css';
import Billboard from './Billboard';
import Sidebar from './Sidebar';


export default function Modalidades() {
 
  
  return (
    <div id = "moddiv" className='Modalidades'>
      
            <div id = "side" className= 'barra-lateral'>
                 <Sidebar />

            </div>
            <Billboard  />
    
    
    </div>
  )
}
