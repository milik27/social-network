import { Reducer, AnyAction } from '@reduxjs/toolkit'
import { SagaInjectionModes } from 'redux-injectors'
import { Saga } from 'redux-saga'
import { RootState } from '@src/types/RootState'

type RequiredRootState = Required<RootState>

export type RootStateKeyType = keyof RootState

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>
}

export type InjectReducerParams<Key extends RootStateKeyType> = {
  key: Key
  reducer: Reducer<RequiredRootState[Key], AnyAction>
}

export type InjectSagaParams = {
  key: RootStateKeyType | string
  saga: Saga
  mode?: SagaInjectionModes
}
