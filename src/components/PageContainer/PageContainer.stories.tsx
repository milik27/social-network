import React, { FC } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { PageContainer } from './PageContainer'

export default {
  title: 'Common/PageContainer',
  component: PageContainer,
} as Meta

export const Template: Story<FC> = (args) => <PageContainer {...args}>Content</PageContainer>
