import {Brands} from "../../../../../../../app/api/types/brands.types";
import {Reducer} from "redux";
import {Actions, InitialState} from "./types/brands-reducer.types";

export let initialState = {
    items: [] as Brands[],
    isLoading: true,
    hasMore: false,
}
const brandsReducer: Reducer<InitialState, Actions> = (state = initialState, action) => {
   switch (action.type) {
       case "brands/items":
           return {
               ...state,
               items: action.items,
               isLoading: false,
           }
       case "brands/loading":
           return {
               ...state,
               isLoading: action.isLoading
           }
       case "brands/more":
           return {
               ...state,
               hasMore: action.hasMore,
           }
       default: {
           return state
       }
   }
}


export default brandsReducer;