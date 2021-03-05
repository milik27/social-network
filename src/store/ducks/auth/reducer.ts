import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@src/utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from '@src/utils/redux-injectors'
import { authSaga } from '@src/store/ducks/auth/saga'
import { StatusEnum } from '@src/store/type'

type SetUserDataType = PayloadAction<{ userId: number; email: string; login: string }>

export const initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
  logOutIsLoading: false,
  loginIsLoading: false,
  status: StatusEnum.NEWER as StatusEnum,
}

const slice = createSlice({
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
    getUserData: (store) => {
      store.status = StatusEnum.LOADING
    },
    setAuthStatus: (store, { payload }: PayloadAction<StatusEnum>) => {
      store.status = payload
    },
  },
})

export type AuthStateType = typeof initialState

export const { actions: authActions, reducer } = slice

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: authSaga })
  return { actions: slice.actions }
}
