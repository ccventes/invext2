import React from 'react'

export default function Tecnotabla({data}) {
  return (
    <div>
            {data.map((item, index) => (
                <div
                    key={index}
                    className=' Tecnotabla'
                    style = {{ border: `thick solid ${item.color}` }}
                >
                    <h4 className = 'Tecnotabla-title-text'style={{ backgroundColor: item.color, color: 'white',fontWeight: 'bold' }}>{item.titulo}</h4>
                    <p><strong>Campos:</strong> {item.campos}</p>
                    <p><strong>Estados:</strong> {item.Estados}</p>
                    <p><strong>Propuesta:</strong> {item.Propuesta}</p>
                    <p><strong>Inventores:</strong> {item.inventores}</p>
                </div>
            ))}
        </div>
  )
}
