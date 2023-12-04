import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/offers-actions";
import {initialState} from "../offers-reducer";

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsType<typeof actions>
export type FiltersType = {
    currency: number
    shipNumber: number
}
export type ThunkType = BaseThunkType<ActionsType>