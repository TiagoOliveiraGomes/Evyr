import React from 'react'
import { ConfirmButton } from '../../components/commons/confirmButton'
import { Input } from '../../components/commons/input'
import { BlackBox } from '../../components/template/blackBox'
import './styles.css'

export function StartPage() {
  return (
    <div className='StartPage-Container'>
        <BlackBox>
        <div className='flex flex-col justify-center items-center gap-14'>
          <div>
              <Input placeholder='Ex: Joãozin' />
          </div>
              <ConfirmButton>Iniciar</ConfirmButton>
            </div>
        </BlackBox>
    </div>
  )
}
