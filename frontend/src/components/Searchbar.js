import React from 'react'
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';

export default function Searchbar({color}) {
    const cuadroStyles = {
        width: "100%",
        height: "100px", // Ajusta la altura según tus necesidades
        backgroundColor: color, // Utiliza el color proporcionado como fondo
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    const spacesStyles ={

        width: "35%",
    };
    const formStyle = {
        width: "30%",
        marginBottom: "0px",
        marginTop: "0px",
        paddingLeft: "2.75rem",
        
    };
  
    return (
        <div>
            
            
                <div style={cuadroStyles}>
                    <div style = {spacesStyles}></div>
                    <Form.Control style = {formStyle}
                        placeholder="          Busqueda en el sitio        "
                        aria-label="Busqueda en el sitio"
                        aria-describedby="basic-addon2"
                    />
                     <div style = {spacesStyles}></div>
            </div>
            
           
        </div>
  )
}

Searchbar.propTypes = {
    color: PropTypes.string.isRequired,
  };
