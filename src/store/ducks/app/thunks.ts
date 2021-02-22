import { BaseThunkType } from '@src/store/type'
import { getUserData } from '@src/store/ducks/auth/thunks'
import { initializedSuccess } from '@src/store/ducks/app/reducer'

const initializeApp = (): BaseThunkType => async (dispatch) => {
  const userData = dispatch(getUserData())
  await Promise.all([userData])
  dispatch(initializedSuccess())
}

export { initializeApp }
