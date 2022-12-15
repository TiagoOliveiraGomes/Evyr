import React from 'react'
import './styles.css'

interface ListPartsToEvolveProps {
    selected: boolean,
}

export function ListPartsToEvolve({selected}:ListPartsToEvolveProps) {
  return (
    <ul>
                <li className={`${selected? 'bg-gradient-to-r from-transparent via-[#2f6ebab7]' : 'bg-transparent'}`}>
                    <h3>Cabeça</h3>
                </li> 
                {/* TODO: Colocarr um estado Select em todos os 'FALSE' */}
                <li className={`${false? 'bg-gradient-to-r from-transparent via-[#2f6ebab7]' : 'bg-transparent'}`}>
                    <h3>Corpo</h3>
                </li>
                <li className={`${false? 'bg-gradient-to-r from-transparent via-[#2f6ebab7]' : 'bg-transparent'}`}>
                    <h3>Cauda</h3>
                </li>
                <li className={`${false? 'bg-gradient-to-r from-transparent via-[#2f6ebab7]' : 'bg-transparent'}`}>
                    <h3>Arma</h3>
                </li>
            </ul>
  )
}
