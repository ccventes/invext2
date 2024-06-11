import React from 'react';

const divLink ={
  width: "40%",
  marginLeft: "15px",
  marginRight: "50px",
  borderStyle: "solid",
  borderColor: "gray",
  background:  "gray",
  borderWidth: "Thick",
  
  
  zIndex: -1, // Higher z-index for the div


};
const imgStyle = {
 position: 'relative',
 zIndex: 0, // Lower z-index for the image
};

const Sectionorganization = {
 
 display : 'flex',
 flexDirection: 'row',

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
     <div style = {Sectionorganization}>
        {
          data.galeria.data.attributes.Elementos.map(elemento =>(
            <div style = {divLink} key = {elemento.id}> 
            <img  style = { imgStyle } src={ elemento.Archivo.data.attributes.url} className="d-block w-100 " alt="..."/>
            <p> </p>
            <p style = {{color:'white',}}>{elemento.Descripcion}</p>
            </div>
          ))
        }

     </div>
  );
}
}
