import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '@src/store/ducks/users/thunks'
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
import { User } from './User'

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>()
  const queryPage = useQuery('page')
  const usersItems = useSelector(selectUsersItems)
  const isLoading = useSelector(selectUsersIsLoading)
  const isError = useSelector(selectUsersIsError)
  const pageSize = useSelector(selectUsersPageSize)

  useEffect(() => {
    if (queryPage) {
      dispatch(getUsersThunk(pageSize, +queryPage))
    }
  }, [dispatch, pageSize, queryPage])

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
