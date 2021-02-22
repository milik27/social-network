import { rootStore } from '@src/store/rootStore'

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
export type BaseThunkType = (dispatch: AppDispatch) => void
export enum StatusEnum {
  NEWER = 'newer',
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}
