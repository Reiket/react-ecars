import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../Home/components/Offers/store/selector/offers-selector";
import {useParams} from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Cars from "./components/Cars/Cars";
import Loader from "../../../../shared/components/Loader/Loader";
import {AppDispatch} from "../../../../app/store/types/store.types";
import {fetchOfferById} from "./store/thunks/fetchOfferById";
import {fetchFavorites} from "../Favorites/store/thunks/fetchFavorites";
import {selectIsFetchingDetail} from "./store/selector/details-selector";

const Details: React.FC = () => {
    const {id} = useParams();
    const dispatch: AppDispatch = useDispatch();
    const {shipNumber, currency} = useSelector(selectFilters)
    const IsFetchingDetail = useSelector(selectIsFetchingDetail)
    React.useEffect(() => {
        dispatch(fetchOfferById(Number(id)))
        dispatch(fetchFavorites(shipNumber))
    }, [id]);

    return !IsFetchingDetail ?   <section className="section__details details">
        <div className="details__container">
            <Breadcrumbs/>
            <div className="details__body">
                <Cars currency={currency}/>
            </div>
        </div>
    </section> : <Loader classnames={"details__loader"}/>
};

export default Details;

