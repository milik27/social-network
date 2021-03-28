import { expectSaga } from 'redux-saga-test-plan'
import { call, takeLatest } from 'redux-saga/effects'
import { authAPI } from '@src/api/auth-api'
import { StatusEnum } from '@src/store/type'
import { throwError } from 'redux-saga-test-plan/providers'
import { authSaga, getUserData } from '../saga'
import * as slice from '../reducer'

describe('getUserData Saga', () => {
  it('should success', () => {
    const userRes = {
      resultCode: 0,
      messages: [],
      fieldsErrors: [],
      data: {
        id: 1,
        email: 'test@test.test',
        login: 'test',
      },
    }
    return expectSaga(getUserData)
      .provide([[call(authAPI.getAuth), userRes]])
      .withReducer(slice.reducer)
      .hasFinalState({
        ...slice.initialState,
        status: StatusEnum.LOADED,
        login: userRes.data.login,
        email: userRes.data.email,
        userId: userRes.data.id,
        isAuth: true,
      })
      .run()
  })
  it('should error', () => {
    const error = new Error('error')
    return expectSaga(getUserData)
      .provide([[call(authAPI.getAuth), throwError(error)]])
      .withReducer(slice.reducer)
      .hasFinalState({
        ...slice.initialState,
        status: StatusEnum.ERROR,
        isAuth: false,
      })
      .run()
  })
})

describe('authSaga Saga', () => {
  const authIterator = authSaga()
  it('should start task to watch for loadRepos action', () => {
    const takeLatestDescriptor = authIterator.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(slice.authActions.getUserData.type, getUserData))
  })
})
