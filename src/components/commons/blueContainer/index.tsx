import React from 'react'
import './styles.css'

export interface BlueContainerProps {
    selected: boolean,
}
export function BlueContainer(props: BlueContainerProps) {
    const { selected } = props
  return (
    <div className='BlueContainer-Container'>
        <header>
            Escolha sua evolução
        </header>
        <main>
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
        </main>
        <footer>
            <h3>Press Z to select</h3>
            <h3>Press X to Cancel</h3>
        </footer>
    </div>
  )
}
