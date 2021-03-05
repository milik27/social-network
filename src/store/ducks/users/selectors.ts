import { StatusEnum } from '@src/store/type'
import { RootState } from '@src/types/RootState'
import { initialState } from './reducer'

const selectUsers = (state: RootState) => state.users || initialState
const selectUsersStatus = (state: RootState) => selectUsers(state).status

export const selectUsersItems = (state: RootState) => selectUsers(state).users
export const selectUsersIsLoading = (state: RootState) => selectUsersStatus(state) === StatusEnum.LOADING
export const selectUsersIsError = (state: RootState) => selectUsersStatus(state) === StatusEnum.ERROR
export const selectUsersFollowingInProgress = (state: RootState) => selectUsers(state).followingInProgress
export const selectUsersPageSize = (state: RootState) => selectUsers(state).pageSize
export const selectUsersCurrentPage = (state: RootState) => selectUsers(state).currentPage
