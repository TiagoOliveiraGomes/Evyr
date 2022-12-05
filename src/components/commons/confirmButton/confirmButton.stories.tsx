import { Meta, StoryObj } from '@storybook/react'
import { ConfirmButton, ConfirmButtonProps } from './'

export default {
    title: 'Components/BUTTONS/ConfirmButton',
    component: ConfirmButton,
    args: {
        children: 'Iniciar',
    }
} as Meta<ConfirmButtonProps>

export const Default: StoryObj<ConfirmButtonProps> = {}