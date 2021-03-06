import { UsersStateType } from '@src/store/ducks/users/reducer'
import { AuthStateType } from '@src/store/ducks/auth/reducer'
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export type RootState = {
  users?: UsersStateType
  auth?: AuthStateType
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
