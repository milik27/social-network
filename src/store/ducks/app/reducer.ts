import { createSlice } from '@reduxjs/toolkit'
import { BaseThunkType, RootState } from '@src/store/type'

const initialState = {
  initialized: false,
}

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializedSuccess: (store) => {
      store.initialized = true
    },
  },
})

const { initializedSuccess } = appReducer.actions

export const initializeApp = (): BaseThunkType => (dispatch) => {
  setTimeout(() => {
    dispatch(initializedSuccess())
  }, 1000)
}

export const isInitialized = (state: RootState): boolean => state.app.initialized

export default appReducer.reducer
