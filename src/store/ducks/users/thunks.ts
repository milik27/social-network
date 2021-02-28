import { BaseThunkType, StatusEnum } from '@src/store/type'
import { usersAPI } from '@src/api/users-api'
import { ResultCodeEnum } from '@src/api/api'
import {
  setUsers,
  setUsersStatus,
  setCurrentPage,
  setTotalUserCount,
  addFollowingInProgress,
  removeFollowingInProgress,
  toggleFollowStatus,
} from './reducer'

const getUsersThunk = (count: number, page: number): BaseThunkType => async (dispatch) => {
  try {
    dispatch(setUsersStatus(StatusEnum.LOADING))
    const res = await usersAPI.getUsers(count, page)
    dispatch(setUsers(res.items))
    dispatch(setTotalUserCount(res.totalCount))
    dispatch(setCurrentPage(page))
    dispatch(setUsersStatus(StatusEnum.LOADED))
  } catch (e) {
    dispatch(setUsersStatus(StatusEnum.ERROR))
  }
}

const followThunk = (id: number): BaseThunkType => async (dispatch) => {
  dispatch(addFollowingInProgress(id))
  try {
    const res = await usersAPI.follow(id)

    if (res.resultCode === ResultCodeEnum.Success) {
      dispatch(toggleFollowStatus({ id, status: true }))
    }
    // TODO add error

    dispatch(removeFollowingInProgress(id))
  } catch (e) {
    console.error(e)
  }
}

const unFollowThunk = (id: number): BaseThunkType => async (dispatch) => {
  dispatch(addFollowingInProgress(id))
  try {
    const res = await usersAPI.unfollow(id)

    if (res.resultCode === ResultCodeEnum.Success) {
      dispatch(toggleFollowStatus({ id, status: false }))
    }
    // TODO add error

    dispatch(removeFollowingInProgress(id))
  } catch (e) {
    console.error(e)
  }
}

export { getUsersThunk, unFollowThunk, followThunk }
