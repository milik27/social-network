import { call, put, takeLatest } from 'redux-saga/effects'
import { authAPI } from '@src/api/auth-api'
import { CallReturnType } from '@src/utils/types/saga'
import { SagaIterator } from 'redux-saga'
import { StatusEnum } from '@src/store/type'
import { authActions as actions } from './reducer'

function* getUserData(): SagaIterator {
  try {
    const res: CallReturnType<typeof authAPI.getAuth> = yield call(authAPI.getAuth)
    const { id, email, login } = res.data
    yield put(actions.setUserData({ userId: id, email, login }))
    yield put(actions.setAuthStatus(StatusEnum.LOADED))
  } catch (err) {
    yield put(actions.setAuthStatus(StatusEnum.ERROR))
  }
}

export function* authSaga(): SagaIterator {
  yield takeLatest(actions.getUserData.type, getUserData)
}
