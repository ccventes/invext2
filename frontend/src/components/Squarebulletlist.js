import React from 'react'
import './unal.css'

export default function Squarebulletlist({data}) {
    const {items, clase} = data
    
    return (
    
    <div className= 'SquareBulletList'>
        <ul>
        {
            
            items.map((bullet,index) =>(

                <li className = {clase} key ={index}><p> {bullet} </p></li>
            ))}
            
        
        </ul>
    </div>
  )
}

