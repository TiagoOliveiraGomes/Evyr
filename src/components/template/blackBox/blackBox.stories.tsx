import { Meta, StoryObj } from '@storybook/react'
import { ConfirmButton } from '../../commons/confirmButton'
import { Input } from '../../commons/input'
import { BlackBox, BlackBoxProps } from './'

export default {
    title: 'Components/TEMPLATE/BlackBox',
    component: BlackBox,
    args: {
        children: (
            <div className='flex flex-col justify-center items-center gap-14 w-3'>
                <Input placeholder='Ex: Joãozin' />
                <ConfirmButton>Iniciar</ConfirmButton>
            </div>
        ) 
    }
} as Meta<BlackBoxProps>

export const Default: StoryObj<BlackBoxProps> = {}