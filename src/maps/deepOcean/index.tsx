import React from 'react'
import { BlueContainer } from '../../components/commons/blueContainer'
import { Player } from '../../components/player'
import { ListPartsToEvolve } from '../../components/template/listPartsToEvolve'
import './styles.css'

export function DeepOcean() {
  return (
    <div className='DeepOcean-Container'>
      {/* <Player /> */}
      <BlueContainer>
        <ListPartsToEvolve selected />
      </BlueContainer>
    </div>
  )
}
