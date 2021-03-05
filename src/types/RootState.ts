import { UsersStateType } from '@src/store/ducks/users/reducer'
import { AuthStateType } from '@src/store/ducks/auth/reducer'

export type RootState = {
  users?: UsersStateType
  auth?: AuthStateType
}
