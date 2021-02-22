import { createSlice } from '@reduxjs/toolkit'

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

export const { initializedSuccess } = appReducer.actions

export default appReducer.reducer
