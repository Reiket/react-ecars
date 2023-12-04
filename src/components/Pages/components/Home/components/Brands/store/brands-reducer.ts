import {ActionsType, BrandsType, InitialStateType} from "./types/brands-reducer.types";


let initialState = {
    brands: [] as Array<BrandsType>,
}

const brandsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET_BRANDS":
            return {
                ...state,
                brands: action.brands,
            }
        default: {
            return state;
        }
    }
}


export default brandsReducer;