import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '@src/routes/PrivateRoute'

export const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/profile">
        Profile
      </PrivateRoute>
      <Route exact path="/login">
        Login
      </Route>
      <Route path="*">404</Route>
    </Switch>
  )
}
