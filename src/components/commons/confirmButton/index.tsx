import React, { ReactNode } from 'react'
import './styles.css'

export interface ConfirmButtonProps {
    color?: string,
    children: ReactNode,
}

export function ConfirmButton(props: ConfirmButtonProps) {
    const { color, children } = props

  return (
    <button className={`confirmButton-container ${color || 'bg-blue-400'}`}>{children}</button>
  )
}
