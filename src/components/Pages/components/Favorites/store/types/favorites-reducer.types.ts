import {BaseThunkType, InferActionsType} from "../../../../../../app/store/types/store.types";
import {actions} from "../actions/favorites-actions";
import {initialState} from "../favorites-reducer";

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsType<typeof actions>
export type ThunkType = BaseThunkType<ActionsType>