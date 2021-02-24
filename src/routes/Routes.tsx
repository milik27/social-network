import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '@src/routes/PrivateRoute'

export const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/users">
        Users
      </PrivateRoute>
      <PrivateRoute exact path="/messages">
        Messages
      </PrivateRoute>
      <Route exact path="/login">
        Login
      </Route>
      <PrivateRoute exact path="/:userId?">
        Profile
      </PrivateRoute>
      <Route path="*">404</Route>
    </Switch>
  )
}
