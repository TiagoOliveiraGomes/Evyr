import React from 'react'
import './styles.css'
import body1 from '../../../assets/imgs/player/bodies/body1.png'
import head1 from '../../../assets/imgs/player/heads/head_base.png'

interface BodyPlayerProps {
    mouth: number,
    body: string,
    name: string
}

export function BodyPlayer(props: BodyPlayerProps) {
    const { body, mouth, name} = props
  return (
    <div className='BodyPlayer-Container'>
      <div className='sprite'>
        <img 
        className='bodyParts' 
        src={body1} alt="" />
        <img 
        className='bodyParts' 
        src={head1} alt="" />
      </div>
    </div>
  )
}
