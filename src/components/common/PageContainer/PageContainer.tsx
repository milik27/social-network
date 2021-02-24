import React, { FC } from 'react'
import styled from 'styled-components'
import { LeftPanel } from '@src/components/common/LeftPanel/LeftPanel'

const Body = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Main = styled.main`
  display: flex;
  flex: 1;
`

const ContentBox = styled.div`
  flex: 1;
  padding-left: 10px;
`

export const PageContainer: FC = ({ children }) => {
  return (
    <Body>
      <header>header</header>
      <Main>
        <LeftPanel />
        <ContentBox>{children}</ContentBox>
      </Main>
    </Body>
  )
}
