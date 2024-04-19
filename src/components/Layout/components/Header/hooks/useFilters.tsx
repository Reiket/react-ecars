import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import qs from "qs";
import {selectFilters} from "../../../../Pages/components/Home/components/Offers/store/selector/offers-selector";
import React from "react";
import {AppDispatch} from "../../../../../app/store/types/store.types";
import {actions} from "../../../../Pages/components/Home/components/Offers/store/actions/offers-actions";
export const useFilters = () => {
    const [isFilterLoading, setIsFilterLoading] = React.useState(true)
    const filters = useSelector(selectFilters);
    const dispatch: AppDispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    React.useEffect(() => {
        setIsFilterLoading(true)
        const parsed = qs.parse(location.search.substring(1));
        const actualFilters = {
            shipNumber: parsed.ship ? Number(parsed.ship) : 0,
            currency: parsed.currency ? Number(parsed.currency) : 0,
        };
        dispatch(actions.setFilters(actualFilters))
        setIsFilterLoading(false)
    }, [location]);
    const onClickToFilters = (shipNumber: number, currency: number) => {
        dispatch(actions.setFilters({shipNumber, currency}));
        return setSearchParams({
            ship: `${shipNumber}`,
            currency: `${currency}`
        })
    };
    return { filters, onClickToFilters, isFilterLoading };
}