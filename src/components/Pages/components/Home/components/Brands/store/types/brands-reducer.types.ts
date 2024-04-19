import {initialState} from "../brands-reducer";
import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/brands-actions";

export type InitialState = typeof initialState;

export type Actions = InferActionsType<typeof actions>

export type Thunk = BaseThunkType<Actions, void>