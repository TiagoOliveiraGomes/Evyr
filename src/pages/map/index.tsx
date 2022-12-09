import React from 'react'
import { DeepOcean } from '../../maps/deepOcean'
import './styles.css'

export function Map() {
  return (
    <div className='Map-Container'>
      <DeepOcean />
    </div>
  )
}
