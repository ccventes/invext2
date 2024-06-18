import React from 'react';
import './unal.css'

const divLink ={
  width: "80%",
  marginLeft: "0%",
  marginRight: "0%",
  borderStyle: "solid",
  borderColor: "white",
  background:  "#0076B5",
  borderWidth: "thick",
  padding: "5px",
  minHeight: '500px',
  zIndex: 0, // Higher z-index for the div


};
const imgStyle = {
 
  minHeight: '490px',
  width:'78%',
  transform: 'translate(0px, 0px)' ,  
  zIndex: 1, // Lower z-index for the image
};

const Sectionorganization = {
 
 display : 'flex',
 flexDirection: 'column',

}

export default function componentName({data}) {
  if(data !== undefined){
   console.log("Estoy en el componente galeria", data.galeria);
  }
  //dataPagina.paginas.data[0].attributes.seccion.data.attributes  
  /*
           <div> // las imagenes son horizontales 
               <img src={ elemento.Archivo.data.attributes.url} className="d-block w-100 h-100" alt="..."/>
               <p> </p>
               <p>{elemento.Descripcion}</p>
            </div> //ponerle un key ponerle un css 
  
  
  */
  
  if(data.galeria.data){
  return (
     <div id = "s-organization" >
        {
          data.galeria.data.attributes.Elementos.map(elemento =>(
            <div>
            <div style = {divLink} key = {elemento.id}>
            <img  style = { imgStyle } src={ elemento.Archivo.data.attributes.url} className='w-100' alt="..."/>   
            </div>
            <div className = "Zona-Titulo">
            <h3>{elemento.Descripcion}</h3>
            </div>
           
            </div>
                
            
          ))
        }

     </div>
  );
}
}
