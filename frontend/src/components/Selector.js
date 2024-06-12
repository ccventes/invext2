import React from 'react';
import "./unal.css";



const Box = ({ children }) => {
  return <div className = "boxStyle">

        <div class="elevated-box">
             {children}
        </div>
  
  
  </div>;
};

export default Box;