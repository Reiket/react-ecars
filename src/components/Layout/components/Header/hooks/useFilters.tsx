import {useLocation} from "react-router-dom";
import qs from "qs";
import {selectFilters} from "../../../../Pages/components/Home/components/Offers/store/selector/offers-selector";
import React from "react";
import {useNavigateSearch} from "../../../../../shared/hooks/useSearchNavigate";
import {actions} from "../../../../Pages/components/Home/components/Offers/store/actions/offers-actions";
import {selectDetail} from "../../../../Pages/components/Details/store/selector/details-selector";
import {useAppDispatch, useAppSelector} from "../../../../../app/store/hooks";

const symbolInURL = 1;
export const useFilters = () => {
    const [isFilterLoading, setIsFilterLoading] = React.useState(true)
    const filters = useAppSelector(selectFilters);
    const detail = useAppSelector(selectDetail);
    const dispatch = useAppDispatch();
    const navigateSearch = useNavigateSearch();
    const location = useLocation();
    const cardPathname = `/${Number(location.pathname.charAt(symbolInURL))}`;
    React.useEffect(() => {
        setIsFilterLoading(true)
        const parsed = qs.parse(location.search.substring(1));
        const { ship, currency } = parsed;
        const actualFilters = {
            shipNumber: ship ? Number(ship) : 0,
            currency: currency ? Number(currency) : 0,
        };
        dispatch(actions.setFilters(actualFilters))
        setIsFilterLoading(false)
    }, []);
    React.useEffect(() => {
        const paths = {
            "/": { ship: filters.shipNumber, currency: filters.currency },
            [cardPathname]: { currency: filters.currency },
            "/favorites": { ship: filters.shipNumber, currency: filters.currency }
        };
        const currentPath = location.pathname;
        navigateSearch(currentPath, paths[currentPath]);
    }, [filters, detail, location.pathname]);

    const onClickToFilters = (shipNumber: number, currency: number) => {
        dispatch(actions.setFilters({shipNumber, currency}));
    };

    return { filters, onClickToFilters, isFilterLoading };
}