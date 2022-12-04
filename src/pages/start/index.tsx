import React from 'react'
import { ConfirmButton } from '../../components/commons/confirmButton'
import { BlackBox } from '../../components/template/blackBox'
import './styles.css'

export function StartPage() {
  return (
    <div className='StartPage-Container'>
        <BlackBox>
            <ConfirmButton>Iniciar</ConfirmButton>
        </BlackBox>
    </div>
  )
}
