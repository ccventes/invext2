import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import laboratoriosModel from '../models/laboratoriosModel';

function Lablist() {
    console.log("LLALALALLALA laboratorios model LALALLALALALLALA", laboratoriosModel);

    const obtenerDepartamentosUnicos = (laboratorios) => {
        const departamentos = laboratorios.map(laboratorio => laboratorio.DEPARTAMETO);
        return [...new Set(departamentos)];
    };

    const [selectedOption, setSelectedOption] = useState('FIA');
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [showLaboratorios, setShowLaboratorios] = useState(true);  // Initial display set to true

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedDepartamento('');  // Reset selected departamento when faculty changes
        setShowLaboratorios(true);  // Show list when faculty changes
    };

    const handleDepartamentoChange = (event) => {
        setSelectedDepartamento(event.target.value);
        setShowLaboratorios(true);  // Show list when department changes
    };

    useEffect(() => {
        setShowLaboratorios(true);  // Ensure the list shows initially
    }, []);

    const laboratoriosFiltrados = laboratoriosModel.filter(laboratorio => laboratorio.facultad === selectedOption);
    const departamentosUnicos = obtenerDepartamentosUnicos(laboratoriosFiltrados);

    const laboratoriosFinalFiltrados = laboratoriosFiltrados.filter(laboratorio => laboratorio.DEPARTAMETO === selectedDepartamento || selectedDepartamento === '');

    console.log("Laboratorios Final Filtrados", laboratoriosFinalFiltrados);

    return (
        <div>
            <h4 style={{ textAlign: 'left', paddingLeft: '2%', marginLeft: '20%', fontSize: '30px', marginBottom: '2%', color: '#0C1060' }}>
                Elegir parametros de busqueda:
            </h4>
            <div className='Selector-lab-fac'>
                <div className='selectFac'>
                    <div id="FIAimage" className='lab-fac-img'>
                        {/* Image or content can be placed here */}
                    </div>
                    <div className='lab-fac-select'>
                        <Form>
                            <Form.Check
                                type="radio"
                                id="custom-switch"
                                label={<span style={{ fontSize: '20px', marginTop: '20px' }}>Facultad de Ingenieria y Administación</span>}
                                value="FIA"
                                checked={selectedOption === 'FIA'}
                                onChange={handleOptionChange}
                            />
                        </Form>
                    </div>
                </div>
                <div className='selectFac'>
                    <div id="FCAimage" className='lab-fac-img'>
                        {/* Image or content can be placed here */}
                    </div>
                    <div className='lab-fac-select'>
                        <Form>
                            <Form.Check
                                type="radio"
                                id="custom-radio"
                                label={<span style={{ fontSize: '20px', marginTop: '20px' }}>Facultad de ciencias agropecuarias</span>}
                                value="FCA"
                                checked={selectedOption === 'FCA'}
                                onChange={handleOptionChange}
                            />
                        </Form>
                    </div>
                </div>
            </div>
            <div style={{ marginRight: '25%', marginLeft: '25%', width: '55%',marginBottom: '70px', paddingBottom: '30px' }}>
                <h3 style={{ textAlign: 'left', color: 'rgb(47, 36, 104)' }}>Departamento</h3>
                <Form.Select aria-label="Selecciona un departamento" value={selectedDepartamento} onChange={handleDepartamentoChange}>
                    
                    {
                        departamentosUnicos.map((departamento, index) => (
                            <option key={index} value={departamento}>{departamento}</option>
                        ))
                    }
                </Form.Select>
            </div>
            <div>
                <h2 style={{ textAlign: 'left', color: 'rgb(47, 36, 104)', paddingLeft: '25%', marginBottom:'50px' }}>Laboratorios:</h2>
                <div style = {{width: '50%', marginLeft: '25%'}}>
                <ul style={{ paddingLeft: '1%',listStyleType: 'none', marginBottom:'100px' }}>
                    {
                        laboratoriosFinalFiltrados.map((laboratorio, index) => (
                            <li style = {{
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                paddingTop: '20px', 
                                paddingBottom: '20px', 
                                marginLeft: '15px', 
                                textAlign: 'left', 
                                height: '70px', 
                                borderBottom: 'medium dotted #4C4CDB' 
                                
                                }} key={index}><p style ={{fontWeight: 'bold'}}>{laboratorio.LABORATORIO}</p>
                              <a 
                                        href={`https://www.palmira.unal.edu.co/images/descargas/${laboratorio.link}`}  // Replace with actual URL
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            
                                            
                                            backgroundColor: '#FFA500', 
                                            color: 'white', 
                                            padding: '10px 20px', 
                                            borderRadius: '5px', 
                                            textDecoration: 'none', 
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Ver Más
                                    </a>
                                </li>
                            
                            
                        ))
                    }
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Lablist;
