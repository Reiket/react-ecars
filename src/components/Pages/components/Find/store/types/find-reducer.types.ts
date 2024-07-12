import { initialState } from "../find-reducer";
import {
  BaseThunkType,
  InferActionsType,
} from "src/app/store/types/store.types";
import { actions } from "../actions/find-actions";

export type InitialState = typeof initialState;
export type Actions = InferActionsType<typeof actions>;
export type Thunk = BaseThunkType<Actions, void>;
