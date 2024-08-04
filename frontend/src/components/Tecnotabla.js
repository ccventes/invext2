import React from 'react'

export default function Tecnotabla({data, color}) {
  
    console.log("+++++++++++COLOR ES++++++++", color)
    console.log("+++++++++++COLOR ES++++++++", data)
    const filteredData = data.filter((tech)=> tech.color === color);
    console.log("datos filtrados " , filteredData)
    return (
    <div>
            {filteredData.map((item, index) => (
                <div
                    key={index}
                    className=' Tecnotabla'
                    style = {{ border: `thick solid ${item.color}` }}
                >   
                    <h4 className = 'Tecnotabla-title-text'style={{ backgroundColor: item.color, color: 'white',fontWeight: 'bold' }}>{item.titulo}</h4>
                    <div className='Tecnotablas-columnas'>
                        <div style = {{width: '40%'}}>
                                <p style = {{paddingLeft: '10px'}}><strong style = {{color:item.color}}>Campos de Aplicación:</strong></p>
                                <p style = {{paddingLeft: '10px'}}> {item.campos}</p>
                                <p style = {{paddingLeft: '10px'}}><strong style = {{color:item.color}}>Estado Propiedad Intelectual:</strong></p>
                                <p style = {{paddingLeft: '10px'}}> {item.propint}</p>  
                                <p style = {{paddingLeft: '10px'}}><strong style = {{color:item.color}}>Estado de desarrollo:</strong></p>
                                <p style = {{paddingLeft: '10px'}}> {item.Estados}</p>           

                        </div>
                        <div style = {{width: '60%', paddingRight: '10px'}}>
                                <p><strong style = {{color:item.color}}>Propuesta:</strong></p>
                                <p> {item.Propuesta}</p>
                               
                        </div>

                    </div>
                    <p style = {{paddingLeft: '10px'}}><strong style = {{color:item.color}}>Inventores:</strong></p>
                    <p style = {{paddingLeft: '10px'}}> {item.inventores}</p>
                    
                </div>
            ))}
           {color && (
                <a style={{ textDecoration: 'none' }} href='#menu-back'>
                        <h4 className='Tecnotabla-go-back' style={{ backgroundColor: color, color: 'white', fontWeight: 'bold', border: '1px solid black', marginTop: '15px', marginLeft: '30px' }}>
                            Volver al menú
                        </h4>
                </a>
            )}

            </div>
  )
}


