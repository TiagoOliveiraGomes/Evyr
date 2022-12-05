import React, { ReactNode } from 'react'
import './styles.css'

export interface BlackBoxProps {
    children: ReactNode
}

export function BlackBox(props: BlackBoxProps) {
  return (
    <div className='BlackBox-Container'>
        {props.children}
    </div>
  )
}
