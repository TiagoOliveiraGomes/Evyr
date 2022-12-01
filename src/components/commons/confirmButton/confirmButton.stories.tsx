import { Meta, StoryObj } from '@storybook/react'
import { ConfirmButton, ConfirmButtonProps } from './'

export default {
    title: 'Components/BUTTONS/ConfirmButton',
    component: ConfirmButton,
    args: {
        text: 'Iniciar',
    }
} as Meta<ConfirmButtonProps>

export const Default: StoryObj<ConfirmButtonProps> = {}