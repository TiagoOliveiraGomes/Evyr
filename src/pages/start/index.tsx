import React from 'react'
import './styles.css'

import { ConfirmButton } from '../../components/commons/confirmButton'
import { Input } from '../../components/commons/input'
import { BlackBox } from '../../components/template/blackBox'
import { FlagBrasil } from '../../assets/imgs/flags/brasil'
import { CaretDown } from 'phosphor-react'

export function StartPage() {
  return (
    <div className='StartPage-Container'>
        <BlackBox>
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
        </BlackBox>
    </div>
  )
}
