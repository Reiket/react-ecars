import {carsAPI} from "../../api/cars-api";
import {actions} from "../actions/brands-actions";
import {ActionsType} from "../types/brands-reducer.types";
import {BaseThunkType} from "../../../../../../../../app/store/types/store.types";

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
