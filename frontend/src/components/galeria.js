import React from 'react';

export default function componentName({data}) {
  if(data !== undefined){
   console.log("Estoy en el componente galeria", data.galeria.data.attributes.Elementos[0]);
  }
  //dataPagina.paginas.data[0].attributes.seccion.data.attributes  
  /*
           <div> // las imagenes son horizontales 
               <img src={ elemento.Archivo.data.attributes.url} className="d-block w-100 h-100" alt="..."/>
               <p> </p>
               <p>{elemento.Descripcion}</p>
            </div> //ponerle un key ponerle un css 
  
  
  */
  
  
  return (
     <div className ="Galeria">
        {
          data.galeria.data.attributes.Elementos.map(elemento =>(
            <div> 
            <img src={ elemento.Archivo.data.attributes.url} className="d-block w-100 h-100" alt="..."/>
            <p> </p>
            <p>{elemento.Descripcion}</p>
            </div>
          ))
        }

     </div>
  );
}
