import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilters, selectIsFetchingItemsById} from "../../../../redux/selectors/offers-selector";
import {useParams} from "react-router-dom";
import {fetchOfferById} from "../../../../redux/reducers/offers-reducer";
import {fetchFavorites} from "../../../../redux/reducers/favorites-reducer";
import {AppDispatch} from "../../../../redux/store";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Cars from "./components/Cars/Cars";
import Loader from "../../../Shared/components/Loader";

const Details: React.FC = () => {
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

