import React, { useState } from 'react';
import './unal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tecnotabla from './Tecnotabla';
import tecnologias from '../models/tecnologias'


const SidebarMenu = () => {
   // Color inicial del contenido
  const [color, setContColor] = useState(null)
  const [activeItemId, setActiveItemId] = useState(null); // ID del elemento activo
  const [ContentbackgroundColor, setContentBackgroundColor] = useState('rgb(233, 228, 228)');
  const menuItems = [
    { background: 'rgb(156 223 230)', id: 1, color: '#0396A6', label: 'TECNOLOGÍAS SOSTENIBLES', content: "Desarrollos tecnológicos que presentan soluciones a desafíos cotidianos en diferentes ámbitos productivos, industriales y sociales." },
    { background: 'rgb(241 166 180)', id: 2, color: '#F24162', label: 'SOFTWARE', content: "Sistemas informáticos que facilitan los procesos de gestión y control de información, específicamente en actividades productivas." },
    { background: 'rgb(147 131 180)',  id: 3, color: '#382859', label: 'EQUIPOS DE PRECISIÓN', content: "Instrumentos, equipos o accesorios que permiten mayor eficiencia, calidad y precisión, para mejorar los procesos de medición y ensayos en laboratorios." },
    { background: 'rgb(139 220 205)',  id: 4, color: '#03A688', label: 'VARIEDADES VEGETALES', content: "Especies vegetales mejoradas genéticamente con el fin de enriquecer características de importancia productiva, como lo son resistencia a plagas y enfermedades, mayor producción, mayor densidad de siembra, entre otras." },
  ];

  const handleMenuItemClick = (color, id, ContentbackgroundColor) => {
    setContColor(color);
    setActiveItemId(id);
    setContentBackgroundColor(ContentbackgroundColor); //
  };
  

  return (
   <div className="sidebar-menu-container-tecnologia">
    <div className="sidebars-background">
      <div className="sidebar-menu-tecnologia">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={`menu-item-tecnologia ${activeItemId === item.id ? 'active' : ''}`}
              onClick={() => handleMenuItemClick(item.color, item.id,item.background)}
              style={{ backgroundColor: activeItemId === item.id ? item.color : '#ffffff', color: activeItemId === item.id ? '#ffffff' : '#000000' }}
            >
              {activeItemId !== item.id ? <i class="bi bi-caret-right"></i> : <i class="bi bi-caret-down"></i>}
              {item.label}
            </div>
            <div className={`menu-item-texto-tecnologia ${activeItemId === item.id ? 'visible' : 'hidden'}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="content-tecnologia" style={{ backgroundColor: ContentbackgroundColor}}>
        <div className='projects-space'>

            <Tecnotabla data={tecnologias} color ={color}/>
            <div style ={{height: '100px'}}></div>
            

        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;