import React, { ReactNode } from 'react'
import { ListPartsToEvolve } from '../../template/listPartsToEvolve'
import { PointsOfCostAndUpgrade } from '../../template/points_Cost_&_Upgrade'
import { SwiperSlider } from '../swiperSlider'
import './styles.css'

export interface BlueContainerProps {
    children: ReactNode
}
export function BlueContainer({children}: BlueContainerProps) {
    
  return (
    <div className='BlueContainer-Container'>
        <header>
            <h1>
                Choose To Evolve
            </h1>
        </header>
        <main className='BlueContainer-content'>
            {/* {children} */}
            <header>
                <h1>Head</h1>
                <h3>Salmon Mouth</h3>
            </header>
            <main>
                <SwiperSlider />
                <PointsOfCostAndUpgrade />
            </main>
        </main>
        <footer>
            <h3>Press Z to select</h3>
            <h3>Press X to Cancel</h3>
        </footer>
    </div>
  )
}
