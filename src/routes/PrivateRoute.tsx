import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '@src/store/ducks/auth/selectors'
import { RouteProps } from 'react-router'

export const PrivateRoute: FC<RouteProps> = ({ ...rest }) => {
  const auth = useSelector(selectAuth)

  if (!auth.isAuth) return <Redirect to="/login" />

  return <Route {...rest} />
}
