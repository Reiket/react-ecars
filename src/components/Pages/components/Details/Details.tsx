import React from 'react';
import {selectFilters} from "../Home/components/Offers/store/selector/offers-selector";
import {useParams} from "react-router-dom";
import Breadcrumbs from "../../../../shared/components/BreadCrumbs/Breadcrumbs";
import Cars from "./components/Cars/Cars";
import {fetchOfferById} from "./store/thunks/fetchOfferById";
import {selectIsFetchingDetail} from "./store/selector/details-selector";
import {useAppDispatch, useAppSelector} from "../../../../app/store/hooks";
import {Icons} from "../../../../shared/components/Icons/Icons";

const Details: React.FC = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {currency} = useAppSelector(selectFilters)
    const IsFetchingDetail = useAppSelector(selectIsFetchingDetail)
    React.useEffect(() => {
        dispatch(fetchOfferById(Number(id)))
    }, [id]);

    return !IsFetchingDetail ?   <section className="section__details details">
        <div className="details__container">
            <Breadcrumbs/>
            <div className="details__body">
                <Cars currency={currency}/>
            </div>
        </div>
    </section> : <Icons.loader/>
};

export default Details;

