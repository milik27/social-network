import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SetUserDataType = PayloadAction<{ userId: number; email: string; login: string }>

const initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
  logOutIsLoading: false,
  loginIsLoading: false,
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (store, { payload }: SetUserDataType) => {
      store.email = payload.email
      store.userId = payload.userId
      store.login = payload.login
      store.isAuth = true
    },
    deleteUserData: (store) => {
      store.email = null
      store.userId = null
      store.login = null
      store.isAuth = false
    },
  },
})

export type AuthStateType = typeof initialState

export const { setUserData, deleteUserData } = authReducer.actions

export default authReducer.reducer
