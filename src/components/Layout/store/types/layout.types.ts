import {InferActionsType} from "../../../../app/store/types/store.types";
import {actions} from "../actions/layout-actios";
import {initialState} from "../layout-reducer";

export type TActions = InferActionsType<typeof actions>

export type TInitialState = typeof initialState
