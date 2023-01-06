import React from 'react'
import { BodyPlayer } from './body'

export function Player() {
  return (
    <div className='Player-Container'>
      <h3 className='whitespace-pre-wrap text-white text-xs opacity-70 mb-7'>
          name: Joaquin
      </h3>
      <BodyPlayer body='armored' mouth={3} name="Tiago" />
    </div>
  )
}
