import React from 'react'

interface BodyPlayerProps {
    mouth: number,
    body: string,
}

export function BodyPlayer(props: BodyPlayerProps) {
    const { body, mouth} = props
  return (
    <div>
        <h3 className='whitespace-pre-wrap text-white'>
            body: {body} {"\n"}
            mouth: {mouth}
        </h3>
    </div>
  )
}
