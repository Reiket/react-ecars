import {AppStateType} from "../store";

export const selectBrands = (state: AppStateType) => {
    return state.cars.brands;
}
