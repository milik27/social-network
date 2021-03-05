import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@src/store/type'
import useQuery from '@src/hooks/useQuery'
import { Redirect } from 'react-router-dom'
import {
  selectUsersIsError,
  selectUsersIsLoading,
  selectUsersItems,
  selectUsersPageSize,
} from '@src/store/ducks/users/selectors'
import { Preloader } from '@src/components/common/Preloader/Preloader'
import { useUsersSlice } from '@src/store/ducks/users/reducer'
import { User } from './User'

export const Users = () => {
  const { actions } = useUsersSlice()
  const dispatch = useDispatch<AppDispatch>()
  const queryPage = useQuery('page')
  const usersItems = useSelector(selectUsersItems)
  const isLoading = useSelector(selectUsersIsLoading)
  const isError = useSelector(selectUsersIsError)
  const pageSize = useSelector(selectUsersPageSize)

  useEffect(() => {
    if (queryPage) {
      dispatch(actions.setCurrentPage(+queryPage))
      // dispatch(actions.set)
      dispatch(actions.getUsers())
    }
  }, [actions, dispatch, queryPage])

  if (!queryPage) return <Redirect to="/users?page=1" />

  if (isError) return <div>При загрузке пользователей произошла ошибка, обновите страницу</div>

  return (
    <Preloader loading={isLoading}>
      {usersItems.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </Preloader>
  )
}
