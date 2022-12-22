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
        <h3 className='whitespace-pre-wrap text-white'>
            name: {name}
        </h3>
      <div className='sprite'>
        <img src={body1} alt="" />
        <img src={head1} alt="" />
      </div>
    </div>
  )
}
