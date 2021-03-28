import { UsersStateType } from '@src/store/ducks/users/reducer'
import { StatusEnum } from '@src/store/type'
import { CallReturnType } from '@src/utils/types/saga'
import { usersAPI } from '@src/api/users-api'
import { UserType } from '@src/types/users'
import * as slice from '../reducer'

describe('users reducer', () => {
  let state: UsersStateType

  beforeEach(() => {
    state = slice.initialState
  })

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state)
  })

  it('should handle setUsersStatus', () => {
    expect(slice.reducer(state, slice.usersActions.setUsersStatus(StatusEnum.LOADED))).toEqual<UsersStateType>({
      ...slice.initialState,
      status: StatusEnum.LOADED,
    })
  })

  it('should handle setUsers', () => {
    const users: Array<UserType> = [
      {
        name: 'test1',
        id: 1,
        photos: {
          small: null,
          large: null,
        },
        status: 'test status',
        followed: true,
        uniqueUrlName: null,
      },
    ]
    expect(slice.reducer(state, slice.usersActions.setUsers(users))).toEqual<UsersStateType>({
      ...slice.initialState,
      users,
    })
  })

  it('should handle setTotalUserCount', () => {
    const totalUserCountTest = 146
    expect(slice.reducer(state, slice.usersActions.setTotalUserCount(totalUserCountTest))).toEqual<UsersStateType>({
      ...slice.initialState,
      totalUserCount: totalUserCountTest,
    })
  })

  it('should handle setCurrentPage', () => {
    const currentPageTest = 18
    expect(slice.reducer(state, slice.usersActions.setCurrentPage(currentPageTest))).toEqual<UsersStateType>({
      ...slice.initialState,
      currentPage: currentPageTest,
    })
  })

  it('should handle userFollow', () => {
    const testTotalUserCountTest = 4
    expect(slice.reducer(state, slice.usersActions.userFollow(testTotalUserCountTest))).toEqual<UsersStateType>({
      ...slice.initialState,
      followingInProgress: [...slice.initialState.followingInProgress, testTotalUserCountTest],
    })
  })

  it('should handle userUnfollow', () => {
    const testTotalUserCountTest = 4
    expect(slice.reducer(state, slice.usersActions.userUnfollow(testTotalUserCountTest))).toEqual<UsersStateType>({
      ...slice.initialState,
      followingInProgress: [...slice.initialState.followingInProgress, testTotalUserCountTest],
    })
  })

  it('should handle removeFollowingInProgress', () => {
    const testTotalUserCountTest = 4

    expect(
      slice.reducer(
        { ...state, followingInProgress: [testTotalUserCountTest] },
        slice.usersActions.removeFollowingInProgress(testTotalUserCountTest),
      ),
    ).toEqual<UsersStateType>({
      ...slice.initialState,
      followingInProgress: slice.initialState.followingInProgress.filter(item => item !== testTotalUserCountTest),
    })
  })

  it('should handle toggleFollowStatus', () => {
    const users: Array<UserType> = [
      {
        name: 'test1',
        id: 1,
        photos: {
          small: null,
          large: null,
        },
        status: 'test status',
        followed: true,
        uniqueUrlName: null,
      },
    ]

    const resultUsers: Array<UserType> = [
      {
        name: 'test1',
        id: 1,
        photos: {
          small: null,
          large: null,
        },
        status: 'test status',
        followed: false,
        uniqueUrlName: null,
      },
    ]

    expect(
      slice.reducer({ ...state, users }, slice.usersActions.toggleFollowStatus({ id: users[0].id, status: false })),
    ).toEqual<UsersStateType>({
      ...slice.initialState,
      users: [...resultUsers],
    })
  })

  it('should handle getUsers', () => {
    expect(slice.reducer(state, slice.usersActions.getUsers())).toEqual<UsersStateType>({
      ...slice.initialState,
      status: StatusEnum.LOADING,
    })
  })
})
