import {initialState} from "../blog-card-reducer";
import {actions} from "../actions/blog-card-actions";
import {BaseThunkType, InferActionsType} from "../../../../../../app/store/types/store.types";

export type InitialState = typeof initialState

export type Actions = InferActionsType<typeof actions>

export type Thunk = BaseThunkType<Actions, void>