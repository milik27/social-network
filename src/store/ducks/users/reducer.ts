import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '@src/types/users'
import { StatusEnum } from '@src/store/type'

const initialState = {
  users: [] as Array<UserType>,
  totalUserCount: 0,
  pageSize: 50,
  currentPage: 1,
  isLoad: false,
  followingInProgress: [] as Array<number>,
  status: StatusEnum.NEWER as StatusEnum,
}

const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersStatus: (store, { payload }: PayloadAction<StatusEnum>) => {
      store.status = payload
    },
    setUsers: (store, { payload }: PayloadAction<Array<UserType>>) => {
      store.users = payload
    },
    setTotalUserCount: (store, { payload }: PayloadAction<number>) => {
      store.totalUserCount = payload
    },
    setCurrentPage: (store, { payload }: PayloadAction<number>) => {
      store.currentPage = payload
    },
    addFollowingInProgress: (store, { payload }: PayloadAction<number>) => {
      store.followingInProgress = [...store.followingInProgress, payload]
    },
    removeFollowingInProgress: (store, { payload }: PayloadAction<number>) => {
      store.followingInProgress = store.followingInProgress.filter((item) => item !== payload)
    },
    toggleFollowStatus: (store, { payload }: PayloadAction<{ id: number; status: boolean }>) => {
      store.users = store.users.map((user) => (user.id === payload.id ? { ...user, followed: payload.status } : user))
    },
  },
})

export type UsersStateType = typeof initialState

export const {
  setUsersStatus,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  addFollowingInProgress,
  removeFollowingInProgress,
  toggleFollowStatus,
} = usersReducer.actions

export default usersReducer.reducer
