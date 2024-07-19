import React from 'react'
import './unal.css'


export default function IzquierdoImagen() {
  return (
    <section>
          <div id = "Estudiantes" className = "IzquierdoImagen">
            
                  <div className = 'Espacio-imagen'>
                      <img  className='ImagenB-white' src = 'https://res.cloudinary.com/dmlhbcigt/image/upload/v1718320650/estudiantes_f35bcf9ea3.jpg'
                          width="510" height="340"
                      
                      />                    

                  </div>
                  <div className = "B-Espacio-texto"  >
                      <div className = "option-espacio-texto">
                          <h3>Para Estudiantes:</h3>
                          <ol>
                              
                              
                              <li>Solicitar información a Coordinación de Extensión de las Facultades de convocatorias existentes.</li>
                              <li>Registrar información de contacto en base de datos.</li>
                              <li>En caso de interés en alguna convocatoria, presentar hoja de vida a Coordinación de Extensión de las Facultades</li>
                              <li>Si es seleccionado, solicitar ante el director del programa curricular, la carta de presentación, para su posterior solicitud a la Decanatura de la Facultad respectiva.</li>
                              <li> Presentar documentación requerida a Coordinación de Extensión de las Facultades.</li>
                              <li> Elaborar y presentar el informe de avance o final según sea el caso, como producto académico.</li>
                          
                          </ol>
                      </div>   
                  </div>
          
          </div>
          <div  id = "Empresas" className = "IzquierdoImagen">
            
                  <div className = 'Espacio-imagen'>
                      <img className='ImagenB-white' src = 'https://res.cloudinary.com/dmlhbcigt/image/upload/v1718320651/empresas_75fadb6ef3.jpg'
                          width="510" height="340"
                      
                      />                    

                  </div>
                  <div className = "B-Espacio-texto Blue"  >
                      <div className = "option-espacio-texto">
                          <h3>Para Entidades o Empresas:</h3>
                          <ol className='Lpractica'>
                          <li>Solicitar información en cuanto a procedimientos para el desarrollo de prácticas y/o pasantías universitarias.</li>
                              <li>Diligenciar y remitir vía electrónica formulario de solicitud para pasantías y/o prácticas. (solicitar al correo de prácticas).</li>
                              <li>Recibir hojas de vida de estudiantes interesados en realizar la práctica y/o pasantía.</li>
                              <li>Realizar las actividades necesarias para selección del estudiante que desarrollará la práctica y/o pasantía.</li>
                              <li>Realizar un convenio, acuerdo o contrato de aprendizaje.</li>
                              <li>Presentar copia de los documentos actualizados de existencia y representación legal.</li>
                              <li>Al finalizar la práctica y/o pasantía, diligenciar formato para la evaluación del estudiante. (solicitar al correo de prácticas).</li>
                          </ol>
                      </div>   
                  </div>
          
          </div>
         
  </section>
  )
}
