import {initialState} from "../details-reducer";
import {BaseThunkType, InferActionsType} from "../../../../../../app/store/types/store.types";
import {actions} from "../actions/details-actions";

export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsType<typeof actions>

export type ThunkType = BaseThunkType<ActionsType>