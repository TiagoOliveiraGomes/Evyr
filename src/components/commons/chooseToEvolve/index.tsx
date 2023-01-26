import React, { ReactNode } from 'react'
import { ListPartsToEvolve } from '../../template/listPartsToEvolve'
import { PartsViewCarousel } from '../../template/partsViewCarousel'
import { PointsOfCostAndUpgrade } from '../../template/points_Cost_&_Upgrade'
import { SwiperSlider } from '../swiperSlider'
import './styles.css'

export interface BlueContainerProps {
    children: ReactNode
}
export function ChooseToEvolve({children}: BlueContainerProps) {
    
  return (
    <div className='ChooseToEvolve-Container'>
        <header>
            <h1>
                Choose To Evolve
            </h1>
        </header>
        <main className='ChooseToEvolve-content'>
            {/* {children} */}
            <PartsViewCarousel />
        </main>
        <footer>
            <h3>Press Z to select</h3>
            <h3>Press X to Cancel</h3>
        </footer>
    </div>
  )
}
