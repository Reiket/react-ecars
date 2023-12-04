import {AppStateType} from "../../../../../../../../app/store/types/store.types";

export const selectBrands = (state: AppStateType) => {
    return state.brands.brands;
}
