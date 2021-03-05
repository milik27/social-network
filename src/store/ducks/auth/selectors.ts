import { RootState } from '@src/types/RootState'
import { StatusEnum } from '@src/store/type'
import { initialState } from './reducer'

const selectAuth = (state: RootState) => state.auth || initialState
const selectAuthStatus = (state: RootState) => selectAuth(state).status

const selectAuthStatusError = (state: RootState) => selectAuthStatus(state) === StatusEnum.ERROR
const selectAuthStatusLoaded = (state: RootState) => selectAuthStatus(state) === StatusEnum.LOADED

export { selectAuth, selectAuthStatusError, selectAuthStatusLoaded }
