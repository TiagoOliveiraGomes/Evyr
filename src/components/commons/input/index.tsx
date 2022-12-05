import React, { ReactNode } from 'react'
import './styles.css'

export interface InputProps {
    placeholder: string,
}

export function Input(props: InputProps) {
    const { placeholder, } = props

  return (
    <input placeholder={placeholder} className={'Input-container'} />
  )
}
