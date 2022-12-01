import React from 'react'
import './styles.css'

interface ConfirmButtonProps {
    color?: string,
    text: string,
}

export function ConfirmButton(props: ConfirmButtonProps) {
    const { color, text } = props

  return (
    <button className='confirmButton-container'>{text}</button>
  )
}
