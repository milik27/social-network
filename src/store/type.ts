import { configureAppStore } from '@src/store/rootStore'

const store = configureAppStore()

export type AppDispatch = typeof store.dispatch
export type BaseThunkType = (dispatch: AppDispatch) => void
export enum StatusEnum {
  NEWER = 'newer',
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}
