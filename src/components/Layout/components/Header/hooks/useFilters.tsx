import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import qs from "qs";
import {selectFilters, selectItemById} from "../../../../../redux/selectors/offers-selector";
import { actions } from "../../../../../redux/reducers/offers-reducer";
import { AppDispatch } from "../../../../../redux/store";
import React from "react";
import {useNavigateSearch} from "../../../../../utils/hooks/useSearchNavigate";
const symbolInURL = 1;
export const useFilters = () => {
    const [isFilterLoading, setIsFilterLoading] = React.useState(true)
    const filters = useSelector(selectFilters);
    const dispatch: AppDispatch = useDispatch();
    const navigateSearch = useNavigateSearch();
    const location = useLocation();
    const cardPathname = `/${Number(location.pathname.charAt(symbolInURL))}`;
    const itemById = useSelector(selectItemById);
    React.useEffect(() => {
        setIsFilterLoading(true)
        const parsed = qs.parse(location.search.substring(1));
        const actualFilters = {
            shipNumber: parsed.ship ? Number(parsed.ship) : 0,
            currency: parsed.currency ? Number(parsed.currency) : 0,
        };
        dispatch(actions.setFilters(actualFilters))
        setIsFilterLoading(false)
    }, []);
    React.useEffect(() => {
        if (location.pathname === "/") {
            navigateSearch("/", {
                ship: `${filters.shipNumber}`,
                currency: `${filters.currency}`
            });
        } else if(location.pathname === cardPathname) {
            navigateSearch(cardPathname, {
                currency: `${filters.currency}`
            });
        }
    }, [filters, itemById]);

    const onClickToFilters = (shipNumber: number, currency: number) => {
        dispatch(actions.setFilters({shipNumber, currency}));
    };

    return { filters, onClickToFilters, isFilterLoading };
}