import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../types/store.types";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch