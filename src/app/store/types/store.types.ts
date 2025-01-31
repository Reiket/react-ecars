import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import store from "../store";
import { Actions } from "../../../components/Pages/components/Home/components/Brands/store/types/brands-reducer.types";

export type InferActionsType<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppStateType, undefined, Action>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;
