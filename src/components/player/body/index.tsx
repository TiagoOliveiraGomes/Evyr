import React from 'react'

interface BodyPlayerProps {
    mouth: number,
    body: string,
    name: string
}

export function BodyPlayer(props: BodyPlayerProps) {
    const { body, mouth, name} = props
  return (
    <div>
        <h3 className='whitespace-pre-wrap text-white'>
            name: {name}
        </h3>
    </div>
  )
}
