import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StatusEnum } from '@src/store/type'

const initialState = {
  initialized: false,
  status: StatusEnum.NEWER as StatusEnum,
}

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializedSuccess: (store) => {
      store.initialized = true
      store.status = StatusEnum.LOADED
    },
    setInitializedStatus: (store, { payload }: PayloadAction<StatusEnum>) => {
      store.status = payload
    },
  },
})

export type AppStateType = typeof initialState

export const { initializedSuccess, setInitializedStatus } = appReducer.actions

export default appReducer.reducer
