import { RootState, StatusEnum } from '@src/store/type'
import { AppStateType } from './reducer'

const selectApp = (state: RootState): AppStateType => state.app

const selectAppStatus = (state: RootState): StatusEnum => selectApp(state).status

const selectAppStatusError = (state: RootState): boolean => selectAppStatus(state) === StatusEnum.ERROR

export { selectAppStatusError, selectApp }
