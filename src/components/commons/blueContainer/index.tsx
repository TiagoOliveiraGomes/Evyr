import React from 'react'
import { ListPartsToEvolve } from '../../template/listPartsToEvolve'
import './styles.css'

export interface BlueContainerProps {
    selected: boolean,
}
export function BlueContainer(props: BlueContainerProps) {
    const { selected } = props
  return (
    <div className='BlueContainer-Container'>
        <header>
            Header
        </header>
        <main>
            <ListPartsToEvolve selected />
        </main>
        <footer>
            <h3>Press Z to select</h3>
            <h3>Press X to Cancel</h3>
        </footer>
    </div>
  )
}
