import {ItemsType} from "../../../../shared/components/Card/types/card.types";

export const actions = {
    toggleIsFetchingDetail: (isFetchingDetail: boolean) => ({type: "TOGGLE_IS_FETCHING_DETAIL", isFetchingDetail} as const),
    setDetail: (detail: ItemsType) => ({type: "SET_DETAIL", detail} as const),
}