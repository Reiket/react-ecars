import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import store from "../store";

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppStateType, undefined, Action>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>