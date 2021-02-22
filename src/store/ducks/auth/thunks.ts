import { BaseThunkType } from '@src/store/type'
import { authAPI } from '@src/api/auth-api'
import { ResultCodeEnum } from '@src/api/api'
import { deleteUserData, setUserData } from './reducer'

const getUserData = (): BaseThunkType => async (dispatch) => {
  const res = await authAPI.getAuth()
  if (res.resultCode === ResultCodeEnum.Success) {
    const { id, email, login } = res.data
    dispatch(setUserData({ userId: id, email, login }))
  } else if (res.resultCode === ResultCodeEnum.Error) {
    dispatch(deleteUserData())
  }
}

export { getUserData }
