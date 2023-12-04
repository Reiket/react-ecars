import {BrandsType} from "../types/brands-reducer.types";


export const actions = {
    setBrands: (brands: Array<BrandsType>) => ({type: "GET_BRANDS", brands} as const)
}



