import React from 'react';
import {connect} from "react-redux";
import {fetchOfferById} from "../../redux/reducers/offers-reducer";
import Details from "./Details";
import {useParams} from "react-router-dom";
import {selectCurrency, selectIsFetchingItemsById, selectItemById} from "../../redux/selectors/offers-selector";

function DetailsContainer({fetchOfferById, itemById, isFetchingItemsById,currency}) {
    console.log(itemById)
    const {id} = useParams();
    React.useEffect(() => {
        fetchOfferById(id);
    }, [fetchOfferById, id, currency]);

    return <Details itemById={itemById} currency={currency} isFetchingItemsById={isFetchingItemsById}/>
}

let mapStateToProps = (state) => ({
    itemById: selectItemById(state),
    currency: selectCurrency(state),
    isFetchingItemsById: selectIsFetchingItemsById(state)
})


export default connect(mapStateToProps, {fetchOfferById})(DetailsContainer);