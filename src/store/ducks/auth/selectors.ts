import { RootState } from '@src/store/type'
import { AuthStateType } from '@src/store/ducks/auth/reducer'

const selectAuth = (state: RootState): AuthStateType => state.auth

export { selectAuth }
