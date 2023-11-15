import {BaseThunkType, InferActionsType} from "../store";
import {carsAPI} from "../../api/cars-api";

type InitialStateType = typeof initialState
export type BrandsType = {
    id: number
    name: string
    imageUrl: string
}
let initialState = {
    brands: [] as Array<BrandsType>,
}

type ActionsType = InferActionsType<typeof actions>
const carsReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
const actions = {
    setBrands: (brands: Array<BrandsType>) => ({type: "GET_BRANDS", brands} as const)
}

type ThunkType = BaseThunkType<ActionsType>
export const fetchBrands = () : ThunkType => {
    return async (dispatch) => {
        try {
            let {data} = await carsAPI.getCarsInfo();
            dispatch(actions.setBrands(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!");
        }
    }
}


export default carsReducer;