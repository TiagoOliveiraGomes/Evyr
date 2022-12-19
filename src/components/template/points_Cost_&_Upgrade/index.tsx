import React from 'react'
import './styles.css'
import { BiteIcon } from '../../../assets/imgs/icons/bite'

export function PointsOfCostAndUpgrade() {
  return (
    <div className='PointsOfCostAndUpgrade-Container'>
        <div>
            <header>
                <h1>Upgrade</h1>
                <div className='icon'>
                    <h3>+2</h3>
                    <BiteIcon />
                </div>
            </header>
        </div>
    </div>
  )
}
