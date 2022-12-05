import { Meta, StoryObj } from '@storybook/react'
import { ConfirmButton } from '../../commons/confirmButton'
import { BlackBox, BlackBoxProps } from './'

export default {
    title: 'Components/TEMPLATE/BlackBox',
    component: BlackBox,
    args: {
        children: <ConfirmButton>Iniciar</ConfirmButton>
    }
} as Meta<BlackBoxProps>

export const Default: StoryObj<BlackBoxProps> = {}