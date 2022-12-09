import { CaretDown } from 'phosphor-react'
import React, { ReactNode } from 'react'
import { FlagBrasil } from '../../../assets/imgs/flags/brasil'
import { ConfirmButton } from '../../commons/confirmButton'
import { Input } from '../../commons/input'
import './styles.css'

export function FormStart() {
  return (
    <form className='BlackBox-Container'>
        <div className='flex flex-col justify-center items-center gap-14'>
          <div className='flex gap-5 items-center'>
              <Input placeholder='Ex: Joãozin' />
              <div className='flex items-center gap-2'>
                <FlagBrasil />
                <CaretDown width={25} height={25} color='white' />
              </div>
          </div>
          <ConfirmButton>Iniciar</ConfirmButton>
        </div>
    </form>
  )
}
