import {carsAPI} from "../../api/api";

const GET_BRANDS = "GET_BRANDS";

let initialState = {
    brands: [],
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: action.brands,
            }
        default: {
            return state;
        }
    }
}

const setBrands = (brands) => ({type: GET_BRANDS, brands});


export const fetchBrands = () => {
    return async (dispatch) => {
        try {
            let {data} = await carsAPI.getCarsInfo();
            dispatch(setBrands(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!");
        }
    }
}


export default carsReducer;