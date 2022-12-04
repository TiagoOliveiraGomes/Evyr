import React, { ReactNode } from 'react'
import './styles.css'

interface BlackBoxProps {
    children: ReactNode
}

export function BlackBox(props: BlackBoxProps) {
  return (
    <div className='BlackBox-Container'>
        {props.children}
    </div>
  )
}
