import { BlueContainer, BlueContainerProps } from ".";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/COMMONS/BlueContainer',
    component: BlueContainer,
    args: {
        selected: true
    }
} as Meta<BlueContainerProps>

export const Default:StoryObj<BlueContainerProps> = {}