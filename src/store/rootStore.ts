import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appReducer from '@src/store/ducks/app/reducer'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const rootStore = configureStore({
  reducer: { app: appReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
