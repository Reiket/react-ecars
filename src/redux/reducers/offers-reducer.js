import {offerAPI} from "../../api/api";

const SET_OFFERS = "SET_OFFERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_ITEMS_BY_ID = "TOGGLE_IS_FETCHING_ITEMS_BY_ID";
const CHANGE_CURRENCY = "CHANGE_CURRENCY";
const CHANGE_SHIP_NUMBER = "CHANGE_SHIP_NUMBER";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE ";
const SET_ITEM_BY_ID = "SET_ITEM_BY_ID";
let initialState = {
    items: [],
    isFetching: false,
    isFetchingItemsById: false,
    currency: 0,
    shipNumber: 0,
    searchValue: "",
    itemById: [],

}
const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OFFERS:
            return {
                ...state,
                items: action.items,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case CHANGE_CURRENCY:
            return  {
                ...state,
                currency: action.currency,
            }
        case CHANGE_SHIP_NUMBER:
            return {
                ...state,
                shipNumber: action.shipNumber,
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.searchValue,
            }
        case SET_ITEM_BY_ID:
            return {
                ...state,
                itemById: action.itemById,
            }
        case TOGGLE_IS_FETCHING_ITEMS_BY_ID:
            return {
                ...state,
                isFetchingItemsById: action.isFetchingItemsById,
            }
        default: {
            return  state;
        }
    }
}


const setOffers = (items) => ({type: SET_OFFERS, items});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const toggleIsFetchingItemsById = (isFetchingItemsById) => ({type: TOGGLE_IS_FETCHING_ITEMS_BY_ID, isFetchingItemsById});
const setIOfferById = (itemById) => ({type: SET_ITEM_BY_ID, itemById});
export const changeCurrency = (currency) => ({type: CHANGE_CURRENCY, currency});
export const changeShipNumber = (shipNumber) => ({type: CHANGE_SHIP_NUMBER, shipNumber});
export const setSearchValue = (searchValue) => ({type: SET_SEARCH_VALUE, searchValue});


export const fetchOffers = (shipNumber, searchValue) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsFetching(true));
            let {data} = await offerAPI.getOffersCard(shipNumber, searchValue);
            dispatch(toggleIsFetching(false));
            dispatch(setOffers(data));
        } catch (err) {
            alert("Something went wrong.Please, try later! " + err);
            console.log("Error:" + err);
        }
    }
}

export const fetchOfferById = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingItemsById(true))
        let {data} = await offerAPI.getOfferCardById(id);
        dispatch(toggleIsFetchingItemsById(false))
        dispatch(setIOfferById(data));
    }
}


export default offersReducer;