import React from 'react'
import { ChooseToEvolve } from '../../components/commons/chooseToEvolve'
import Test from '../../components/commons/test'
import { Player } from '../../components/player'
import { ListPartsToEvolve } from '../../components/template/listPartsToEvolve'
import './styles.css'

export function DeepOcean() {
  return (
    <div className='DeepOcean-Container'>
      {/* <Player /> */}

      {/* <Test /> */}
      
      <ChooseToEvolve>
        <ListPartsToEvolve selected />
      </ChooseToEvolve>
    </div>
  )
}
