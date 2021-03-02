import { combineReducers } from '@reduxjs/toolkit'
import { InjectedReducersType } from '@src/utils/types/injector-typings'

export const createReducer = (injectReducer: InjectedReducersType = {}) => {
  if (Object.keys(injectReducer).length === 0) {
    return (state: any) => state
  }
  return combineReducers({
    ...injectReducer,
  })
}
