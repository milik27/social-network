import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Preloader, PreloaderProps } from './Preloader'

export default {
  title: 'Common/Preloader',
  component: Preloader,
} as Meta

export const Template: Story<PreloaderProps> = (args) => <Preloader {...args}>Content</Preloader>
