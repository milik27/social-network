import { Reducer, AnyAction } from '@reduxjs/toolkit'
import { RootState } from '@src/types/RootState'

type RequiredRootState = Required<RootState>

export type RootStateKeyType = keyof RootState

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>
}
