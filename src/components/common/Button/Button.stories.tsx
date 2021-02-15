import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Buttons',
  component: Button,
} as Meta

export const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>
