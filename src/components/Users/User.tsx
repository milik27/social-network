import React, { FC, useCallback } from 'react'
import { UserType } from '@src/types/users'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '@src/components/common/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@src/store/type'
import { usersActions } from '@src/store/ducks/users/reducer'
import DefaultAvatar from '@src/assets/defaultAvatar.svg'
import { selectUsersFollowingInProgress } from '@src/store/ducks/users/selectors'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.lighter};
`
const Avatar = styled(NavLink)`
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;
`
const Name = styled(NavLink)`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.common.text};

  &:hover {
    text-decoration: underline;
  }
`

const Status = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.common.gray};
`

type UserProps = UserType

export const User: FC<UserProps> = ({ name, photos, status, followed, id }) => {
  const dispatch = useDispatch<AppDispatch>()
  const followingInProgress = useSelector(selectUsersFollowingInProgress)

  const toggleFollow = useCallback(() => {
    if (!followed) {
      dispatch(usersActions.userFollow(id))
    } else {
      dispatch(usersActions.userUnfollow(id))
    }
  }, [dispatch, followed, id])

  return (
    <Wrapper>
      <Avatar to={`/${id}`}>{photos.small ? <img src={photos.small} alt={name} /> : <DefaultAvatar />}</Avatar>

      <Content>
        <Name to={`/${id}`}>{name}</Name>
        <Status>{status}</Status>
      </Content>
      <Button
        loading={followingInProgress.some((progressId) => progressId === id)}
        outline={followed}
        onClick={toggleFollow}
        size="small"
      >
        {followed ? 'Отписаться' : 'Подписаться'}
      </Button>
    </Wrapper>
  )
}
