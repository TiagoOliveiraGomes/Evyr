import { Meta, StoryObj } from '@storybook/react'
import { FlagBrasil } from '../../../assets/imgs/flags/brasil'
import { ConfirmButton } from '../../commons/confirmButton'
import { Input } from '../../commons/input'
import { BlackBox, BlackBoxProps } from './'
import { CaretDown } from 'phosphor-react'

export default {
    title: 'Components/TEMPLATE/BlackBox',
    component: BlackBox,
    args: {
        children: (
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
        ) 
    }
} as Meta<BlackBoxProps>

export const Default: StoryObj<BlackBoxProps> = {}