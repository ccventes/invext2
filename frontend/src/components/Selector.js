import React from 'react';
import './unal.css';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

const Box = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    console.log('-------------------------------------');
    console.log('Estado antes de cambiar:', open);
    setOpen(!open);
    console.log('Estado después de cambiar:', !open);  // Esto puede no reflejar inmediatamente el nuevo estado debido a la naturaleza asincrónica de setState
    console.log('-------------------------------------');

};

  return (
    <div id = "SelectorInicio" className="boxStyle">
      <Row>
        <h1>Prácticas y Pasantías</h1>
        <p>
          Si estás en los últimos semestres de tu pregrado, posgrado o cumples con el 80% disciplinar del avance de tu programa esta información es para ti
        </p>
      </Row>
      <div className="options">
        <div className={classNames('normal-box', 'option2')}>
          <div className="option-espacio-texto">
            <h2>¿Cómo realizo mi inscripción a las prácticas?</h2>
            <p>
              De acuerdo a la modalidad se asignará un formato para el diligenciamiento. Recuerda que tenemos 3 modalidades:
            </p>
            <ul>
                    <li>Práctica empresarial</li>
                    <li>Pasantía</li>
                    <li>Práctica modalidad trabajo de grado</li>
            </ul>
          </div>

          <Button
            className="w-100 custom-button"
            onClick={handleButtonClick}
            aria-controls="collapse-botones"
            aria-expanded={open}
          >
            {open ? 'Ocultar' : 'Mostrar Indicaciones'}
          </Button>
          <Collapse in={open}>
            <div  id="collapse-botones">
                
                <div className = "collapsed-buttons">
                    <Button className="op-button"  href="#Estudiantes" id="#seccion1">
                    Para Estudiantes
                    </Button>
                    <Button className="op-button" href="#Empresas" id="#seccion2">
                    Para Entidades o Empresas
                    </Button>

                </div>
                
                


            </div>
          </Collapse>
        </div>
        <div className={classNames('normal-box', 'option1')}>
        <div className="option-espacio-texto">
            <h2>¿Dónde debo enviar mi hoja de vida?</h2>
            <p>
                Debes enviar tu hoja de vida al correo: Pratpast_pal@unal.edu.co. Recuerda poner tus datos de contacto y programa al que perteneces.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Box;