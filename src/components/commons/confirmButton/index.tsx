import React from 'react'
import './styles.css'

export interface ConfirmButtonProps {
    color?: string,
    text: string,
}

export function ConfirmButton(props: ConfirmButtonProps) {
    const { color, text } = props

  return (
    <button className={`confirmButton-container ${color || 'bg-blue-400'}`}>{text}</button>
  )
}
