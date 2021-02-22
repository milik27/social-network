import { BaseThunkType, StatusEnum } from '@src/store/type'
import { getUserData } from '@src/store/ducks/auth/thunks'
import { initializedSuccess, setInitializedStatus } from '@src/store/ducks/app/reducer'

const initializeApp = (): BaseThunkType => async (dispatch) => {
  dispatch(setInitializedStatus(StatusEnum.LOADING))
  try {
    const userData = dispatch(getUserData())
    await Promise.all([userData])
    dispatch(initializedSuccess())
  } catch (e) {
    dispatch(setInitializedStatus(StatusEnum.ERROR))
  }
}

export { initializeApp }
