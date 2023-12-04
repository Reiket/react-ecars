import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {rootReducers} from "../store";

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
type rootReducerType = typeof rootReducers
export type AppStateType = ReturnType<rootReducerType>
export type AppDispatch = ThunkDispatch<AppStateType, undefined, Action>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>