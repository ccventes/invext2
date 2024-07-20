import React from 'react'
import Ratio from 'react-bootstrap/Ratio';
import './unal.css'


export default function Videos() {
  return (

    <div className = 'video-grid'>
            <div style={{ width: '45%', height: 'auto' }}>
                <Ratio aspectRatio="16x9">
                        <iframe
                            src="https://www.youtube.com/embed/uHCEManCMM0"
                            title="We Binged Dragon Ball Z Abridged: Cell Saga"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                </Ratio>
            </div>
            
            <div style={{ width: '45%', height: 'auto' }}>
                <Ratio aspectRatio="16x9">
                        <iframe
                            src="https://www.youtube.com/embed/uHCEManCMM0"
                            title="We Binged Dragon Ball Z Abridged: Cell Saga"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                </Ratio>
            </div>
    </div>
  )
}
