import React,{useEffect,useState} from 'react'
import Layout from '../components/Layout'

export default function Practica() {
  console.log('================================ pagina practica=================' );
  const [isVisible, setIsSidebarVisible] = useState(false);

  const handleScroll = () => {
    
    const estudiantesSection = document.getElementById('Estudiantes');
    console.log("Aqui estoy llamando handlescroll,  estudiantesSection es ", estudiantesSection  )
    if (estudiantesSection) {
        const sectionTop = estudiantesSection.getBoundingClientRect().top;
        console.log("sectiontop es:", sectionTop);
        console.log("El tipo de sectionTop es: ", typeof sectionTop );

        if (sectionTop < 53) {
          console.log("entro aca true")
          setIsSidebarVisible(true);
           
            
        } else {
          console.log("entro aca false")
          setIsSidebarVisible(false);
            
            
        }
        
       
    }
  };

  useEffect(() => {
    // Añadir el manejador de eventos cuando el componente se monta
    
    window.addEventListener('scroll', handleScroll);
    
    
    // Eliminar el manejador de eventos cuando el componente se desmonta
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    const data ={

      pagina: '/practica',
      visible: isVisible,
    }
   
    return (
    <div>
        
         <Layout   data = {data} ></Layout>
         
    </div>
  )
}
