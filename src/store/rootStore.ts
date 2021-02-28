import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appReducer from '@src/store/ducks/app/reducer'
import authReducer from '@src/store/ducks/auth/reducer'
import usersReducer from '@src/store/ducks/users/reducer'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const rootStore = configureStore({
  reducer: { app: appReducer, auth: authReducer, users: usersReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
