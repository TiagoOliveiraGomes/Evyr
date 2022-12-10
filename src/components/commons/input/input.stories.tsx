import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from './'

export default {
    title: 'Components/INPUTS/Name',
    component: Input,
    args: {
        placeholder: 'Ex: Joãozin',
    }
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}