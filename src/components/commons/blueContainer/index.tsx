import React, { ReactNode } from 'react'
import { ListPartsToEvolve } from '../../template/listPartsToEvolve'
import './styles.css'

export interface BlueContainerProps {
    children: ReactNode
}
export function BlueContainer({children}: BlueContainerProps) {
    
  return (
    <div className='BlueContainer-Container'>
        <header>
            Header
        </header>
        <main>
            {children}
        </main>
        <footer>
            <h3>Press Z to select</h3>
            <h3>Press X to Cancel</h3>
        </footer>
    </div>
  )
}
