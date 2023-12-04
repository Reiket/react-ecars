import {actions} from "../actions/brands-actions";
import {initialState} from "../brands-reducer";
import {InferActionsType} from "../../../../../../../../app/store/types/store.types";

export type ActionsType = InferActionsType<typeof actions>

export type BrandsType = {
    id: number
    name: string
    imageUrl: string
}

export type InitialStateType = typeof initialState