import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@src/utils/@reduxjs/toolkit'
import { UserType } from '@src/types/users'
import { StatusEnum } from '@src/store/type'
import { useInjectReducer, useInjectSaga } from '@src/utils/redux-injectors'
import { usersSaga } from '@src/store/ducks/users/saga'

export type FollowPayloadAction = PayloadAction<number>

export const initialState = {
  users: [] as Array<UserType>,
  totalUserCount: 0,
  pageSize: 50,
  currentPage: 1,
  isLoad: false,
  followingInProgress: [] as Array<number>,
  status: StatusEnum.NEWER as StatusEnum,
}

const slice = createSlice({
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
    userFollow: (store, { payload }: FollowPayloadAction) => {
      store.followingInProgress = [...store.followingInProgress, payload]
    },
    userUnfollow: (store, { payload }: FollowPayloadAction) => {
      store.followingInProgress = [...store.followingInProgress, payload]
    },
    removeFollowingInProgress: (store, { payload }: PayloadAction<number>) => {
      store.followingInProgress = store.followingInProgress.filter(item => item !== payload)
    },
    toggleFollowStatus: (store, { payload }: PayloadAction<{ id: number; status: boolean }>) => {
      store.users = store.users.map(user => (user.id === payload.id ? { ...user, followed: payload.status } : user))
    },
    getUsers: store => {
      store.status = StatusEnum.LOADING
    },
  },
})

export type UsersStateType = typeof initialState

export const { actions: usersActions, reducer } = slice

export const useUsersSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: usersSaga })
  return { actions: slice.actions }
}
