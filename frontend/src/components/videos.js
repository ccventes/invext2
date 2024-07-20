import React from 'react'
import Ratio from 'react-bootstrap/Ratio';
import './unal.css'


export default function Videos() {
  return (

    <div className = 'video-grid'>
            <div style={{ width: '45%', height: 'auto', display:'flex',flexDirection:'column' }}>
                <h1 style ={{minHeight: '100px'}}> La gestión de la propiedad intelectual en la Sede Palmira </h1>
                <Ratio style = {{boxShadow: '10px 10px gray'}} aspectRatio="16x9">
                        <iframe
                            src="https://www.youtube.com/embed/XpPSW7FKrYI"
                            title="We Binged Dragon Ball Z Abridged: Cell Saga"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                </Ratio>
            </div>
            
            <div style={{ width: '45%', height: 'auto' }}>
                <h1 style ={{minHeight: '100px'}}>¿Qué son los derechos de autor y derechos conexos? </h1>
                <Ratio style = {{boxShadow: '10px 10px gray'}} aspectRatio="16x9">
                        <iframe
                            src="https://www.youtube.com/embed/bqy-sGrtszo"
                            title="We Binged Dragon Ball Z Abridged: Cell Saga"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                </Ratio>
            </div>
    </div>
  )
}
