import React from 'react';
import "./unal.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';


const Box = ({ children }) => {
  return <div className = "boxStyle">

        
            <Row>
                <h1> Prácticas y Pasantías</h1>
                <p> Si estás en los últimos semestres de tu pregrado, posgrado o cumples con el 80% disciplinar del avance de tu programa esta información es para ti </p>
            </Row>
            <div className='options'>
                <div className= {classNames('normal-box', 'option2',)}>
                    
                    <div className='option-espacio-texto'>
                        <h2> ¿Cómo realizo mi inscripción a las prácticas?</h2>
                        <p>De acuerdo a la modalidad se asignará un formato para el diligenciamiento. Recuerda que tenemos 3 modalidades</p>

                    </div>
                    <Button className="w-100 custom-button">
                              Botón Personalizado
                    </Button>
                    
        
                    
                </div>
                <div className= {classNames('normal-box', 'option1',)}>
                    
                    
                    {children}
                </div>
            </div>
  
  
  </div>;
};

export default Box;