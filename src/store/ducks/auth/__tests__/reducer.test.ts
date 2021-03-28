import { AuthStateType } from '@src/store/ducks/auth/reducer'
import { StatusEnum } from '@src/store/type'
import * as slice from '../reducer'

describe('auth reducer', () => {
  let state: AuthStateType

  beforeEach(() => {
    state = slice.initialState
  })

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state)
  })

  it('should handle setUserData', () => {
    const user = {
      userId: 1,
      email: 'test@test.test',
      login: 'test',
    }
    expect(slice.reducer(state, slice.authActions.setUserData(user))).toEqual<AuthStateType>({
      ...slice.initialState,
      userId: user.userId,
      email: user.email,
      login: user.login,
      isAuth: true,
    })
  })

  it('should handle deleteUserData', () => {
    // todo refactor
    expect(slice.reducer(state, slice.authActions.deleteUserData())).toEqual<AuthStateType>({
      ...slice.initialState,
    })
  })

  it('should handle getUserData', () => {
    expect(slice.reducer(state, slice.authActions.getUserData())).toEqual<AuthStateType>({
      ...slice.initialState,
      status: StatusEnum.LOADING,
    })
  })

  it('should handle setAuthStatus', () => {
    expect(slice.reducer(state, slice.authActions.setAuthStatus(StatusEnum.LOADED))).toEqual<AuthStateType>({
      ...slice.initialState,
      status: StatusEnum.LOADED,
    })
  })
})
