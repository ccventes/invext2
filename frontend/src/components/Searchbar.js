import React from 'react'
import PropTypes from "prop-types";
import { Form, InputGroup } from 'react-bootstrap';
import logoNeoUnal from '../images/logo_unal_modern.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function Searchbar({color}) {
    const cuadroStyles = {
        width: "100%",
        height: "100px", // Ajusta la altura según tus necesidades
        backgroundColor: color, // Utiliza el color proporcionado como fondo
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: '0 0 25px -11px rgba(0,0,0,0.5)',
      };
    const spacesStyles ={

        width: "42.5%",
        display: "flex",
        flexDirection: "row",
    };
    const formStyle = {
        width: "15%",
        marginBottom: "0px",
        marginTop: "0px",
        marginRight: "30px",
        
        
    };

    const form_control_style ={
        backgroundColor: "#dfdfdf",

    };

    const logoStyle ={

        marginLeft: "40px",
    };
  
    return (
        <div>
            
            
                <div style={cuadroStyles}>
                    <div style = {spacesStyles}>
                    
                    
                    </div>
                    <div style = {spacesStyles}></div>
                    <InputGroup style={formStyle}>
                            <Form.Control style = {form_control_style}
                                type="text"
                                placeholder="Busqueda en el sitio"
                                aria-label="Busqueda en el sitio"
                            />
                            <InputGroup.Text id="basic-addon2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#090c42" }} />
                            </InputGroup.Text>
                    </InputGroup>
                     
                </div>
            
           
        </div>
  )
}

Searchbar.propTypes = {
    color: PropTypes.string.isRequired,
  };
