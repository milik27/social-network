import { expectSaga } from 'redux-saga-test-plan'
import { select } from 'redux-saga/effects'
import * as matchers from 'redux-saga-test-plan/matchers'
import { usersAPI } from '@src/api/users-api'
import { selectUsersCurrentPage, selectUsersPageSize } from '@src/store/ducks/users/selectors'
import { CallReturnType } from '@src/utils/types/saga'
import { StatusEnum } from '@src/store/type'
import { throwError } from 'redux-saga-test-plan/providers'
import { getUsers, userFollow } from '../saga'
import * as slice from '../reducer'

describe('getUsers Saga', () => {
  it('should success', () => {
    const usersRes: CallReturnType<typeof usersAPI.getUsers> = {
      items: [
        {
          name: 'test1',
          id: 1,
          photos: {
            small: null,
            large: null,
          },
          status: 'test',
          followed: false,
          uniqueUrlName: null,
        },
      ],
      totalCount: 13,
      error: null,
    }

    return expectSaga(getUsers)
      .provide([
        [select(selectUsersCurrentPage), 1],
        [select(selectUsersPageSize), 50],
        [matchers.call.fn(usersAPI.getUsers), usersRes],
      ])
      .withReducer(slice.reducer)
      .hasFinalState({
        ...slice.initialState,
        users: usersRes.items,
        totalUserCount: usersRes.totalCount,
        status: StatusEnum.LOADED,
      })
      .run()
  })

  it('should error', () => {
    const error = new Error('error')
    return expectSaga(getUsers)
      .provide([
        [select(selectUsersCurrentPage), 1],
        [select(selectUsersPageSize), 50],
        [matchers.call.fn(usersAPI.getUsers), throwError(error)],
      ])
      .withReducer(slice.reducer)
      .hasFinalState({
        ...slice.initialState,
        status: StatusEnum.ERROR,
      })
      .run()
  })
})
