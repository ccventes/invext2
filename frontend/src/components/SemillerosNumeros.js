import React from 'react'
import Counter from './Counter'

export default function SemillerosNumeros() {
  return (
    <div>
      
    
    
                            <div  id = "semilleros-counter" className = "contenedor-counter">
              <div className="CounterRow">
                    <Counter id="counter1" color="#3A9FE3" limit={37} text="Semilleros Palmira" 
                    popoutText="" />
                    <div style={{ height: '100px', width: '2px', borderLeft: 'medium solid #0C6466', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}></div>
                    <Counter id="counter2" color="#2F2468" limit={24} text="Semilleros Ingenieria y Administración" 
                    popoutText="" />
                    <div style={{ height: '100px', width: '2px', borderRight: 'medium solid #0C6466', marginTop: '20px', marginRight: '20px', marginLeft: '20px' }}></div>
                    <Counter id="counter3" color="#17C8CC" limit={13} text="Semilleros Ciencias Agropecuarias" 
                    popoutText="" 
                    />
                  </div>
             </div>
    
    
    </div>
  )
}
