import { SagaIterator } from 'redux-saga'
import { call, put, takeLatest, select } from 'redux-saga/effects'
import { StatusEnum } from '@src/store/type'
import { usersAPI } from '@src/api/users-api'
import { CallReturnType } from '@src/utils/types/saga'
import { selectUsersCurrentPage, selectUsersPageSize } from '@src/store/ducks/users/selectors'
import { ResultCodeEnum } from '@src/api/api'
import { FollowPayloadAction, usersActions as actions } from './reducer'

export function* getUsers(): SagaIterator {
  try {
    const count: ReturnType<typeof selectUsersPageSize> = yield select(selectUsersPageSize)
    const page: ReturnType<typeof selectUsersCurrentPage> = yield select(selectUsersCurrentPage)
    const res: CallReturnType<typeof usersAPI.getUsers> = yield call(usersAPI.getUsers, count, page)
    yield put(actions.setUsers(res.items))
    yield put(actions.setTotalUserCount(res.totalCount))
    yield put(actions.setUsersStatus(StatusEnum.LOADED))
  } catch (err) {
    yield put(actions.setUsersStatus(StatusEnum.ERROR))
  }
}

export function* userFollow({ payload }: FollowPayloadAction): SagaIterator {
  try {
    const res: CallReturnType<typeof usersAPI.follow> = yield call(() => usersAPI.follow(payload))
    yield put(actions.removeFollowingInProgress(payload))
    if (res.resultCode === ResultCodeEnum.Success) {
      yield put(actions.toggleFollowStatus({ id: payload, status: true }))
    }
  } catch (err) {
    yield put(actions.removeFollowingInProgress(payload))
    console.log(err)
  }
}

function* userUnfollow({ payload }: FollowPayloadAction): SagaIterator {
  try {
    const res: CallReturnType<typeof usersAPI.follow> = yield call(() => usersAPI.unfollow(payload))
    yield put(actions.removeFollowingInProgress(payload))
    if (res.resultCode === ResultCodeEnum.Success) {
      yield put(actions.toggleFollowStatus({ id: payload, status: false }))
    }
  } catch (err) {
    yield put(actions.removeFollowingInProgress(payload))
    console.log(err)
  }
}

export function* usersSaga(): SagaIterator {
  yield takeLatest(actions.getUsers.type, getUsers)
  yield takeLatest(actions.userFollow.type, userFollow)
  yield takeLatest(actions.userUnfollow.type, userUnfollow)
}
