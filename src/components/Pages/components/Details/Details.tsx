import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilters, selectIsFetchingItemsById} from "../Home/components/Offers/store/selector/offers-selector";
import {useParams} from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Cars from "./components/Cars/Cars";
import Loader from "../../../../shared/components/Loader/Loader";
import {useNavigateSearch} from "../../../../shared/hooks/useSearchNavigate";
import {AppDispatch} from "../../../../app/store/types/store.types";
import {fetchOfferById} from "../Home/components/Offers/store/thunks/fetchOfferById";
import {fetchFavorites} from "../Favorites/store/thunks/fetchFavorites";

const Details: React.FC = () => {
    const navigateSearch = useNavigateSearch();

    const {id} = useParams();
    const dispatch: AppDispatch = useDispatch();
    const {shipNumber, currency} = useSelector(selectFilters)
    const isFetchingItemsById = useSelector(selectIsFetchingItemsById)
    React.useEffect(() => {
        dispatch(fetchOfferById(Number(id)))
        dispatch(fetchFavorites(shipNumber))
    }, [id]);


    return !isFetchingItemsById ?   <section className="section__details details">
        <div className="details__container">
            <Breadcrumbs/>
            <div className="details__body">
                <Cars currency={currency}/>
            </div>
        </div>
    </section> : <Loader classnames={"details__loader"}/>
};

export default Details;

