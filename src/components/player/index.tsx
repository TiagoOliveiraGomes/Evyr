import React from 'react'
import { BodyPlayer } from './body'

export function Player() {
  return (
    <div className='Player-Container'>
      <BodyPlayer body='armored' mouth={3} name="Tiago" />
    </div>
  )
}
