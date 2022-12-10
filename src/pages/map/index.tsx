import React from 'react'
import { DeepOcean } from '../../maps/deepOcean'
import './styles.css'

export function Map() {
  return (
    <div className='Map-Container'>
      <div className='InfoMap-Container'>
        <h1>Press Q to evolve</h1>
        <h1>Click P to options</h1>
      </div>
      <DeepOcean />
    </div>
  )
}
