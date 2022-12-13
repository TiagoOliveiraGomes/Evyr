import React from 'react'
import './styles.css'

export function BlueContainer() {
  return (
    <div className='BlueContainer-Container'>
        <header>
            Escolha sua evolução
        </header>
        <main>
            <ul>
                <li>
                    <h3>Cabeça</h3>
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
