import { rootReducer } from '@src/store/rootReducer'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

// actions type
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: never[]) => infer U } ? U : never

// state type
type ReducersType = typeof rootReducer
export type StateType = ReturnType<ReducersType>

// thunk type
export type BaseThunkType<A extends Action = Action, P = Promise<void>> = ThunkAction<P, StateType, unknown, A>
