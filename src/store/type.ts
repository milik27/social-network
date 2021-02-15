import { rootStore } from '@src/store/rootStore'

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
export type BaseThunkType = (dispatch: AppDispatch) => void
