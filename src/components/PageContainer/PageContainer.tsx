import React, { FC } from 'react'
import styled from 'styled-components'
import { LeftPanel } from '@src/components/PageContainer/LeftPanel/LeftPanel'
import { Header } from '@src/components/Header/Header'

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
  padding: 10px;
  margin-left: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.background.medium};
`

export const PageContainer: FC = ({ children }) => {
  return (
    <Body>
      <Header />
      <Main>
        <LeftPanel />
        <ContentBox>{children}</ContentBox>
      </Main>
    </Body>
  )
}
