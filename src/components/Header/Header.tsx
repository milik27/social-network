import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '@src/components/common/Button/Button'
import { useSelector } from 'react-redux'
import { selectAuth } from '@src/store/ducks/auth/selectors'

const Wrapper = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.palette.background.medium};
  margin-bottom: 5px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
  z-index: 10;
`

const Logo = styled.div`
  background-color: ${({ theme }) => theme.palette.background.lighter};
  color: ${({ theme }) => theme.palette.common.invertText};
  padding: 10px;
  border-radius: 50px;
`

const Profile = styled.div`
  margin-left: auto;
`

export const Header = () => {
  const auth = useSelector(selectAuth)

  return (
    <Wrapper>
      <Logo>Social network</Logo>

      <Profile>
        {auth.isAuth ? (
          <div>user</div>
        ) : (
          <NavLink to="/login">
            <Button size="small">Войти</Button>
          </NavLink>
        )}
      </Profile>
    </Wrapper>
  )
}
