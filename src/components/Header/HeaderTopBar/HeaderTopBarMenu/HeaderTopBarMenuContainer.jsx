import React from 'react';
import {connect} from "react-redux";
import {changeCurrency, changeShipNumber} from "../../../../redux/reducers/offers-reducer";
import HeaderTopBarMenu from "./HeaderTopBarMenu";
import {selectCurrency, selectShipNumber} from "../../../../redux/selectors/offers-selector";

const HeaderTopBarMenuContainer = ({changeCurrency, changeShipNumber, shipNumber, currency}) => {
    return (
       <HeaderTopBarMenu currency={currency} changeCurrency={changeCurrency} changeShipNumber={changeShipNumber} shipNumber={shipNumber}/>
    );
};
let mapStateToProps = (state) => ({
    shipNumber: selectShipNumber(state),
    currency: selectCurrency(state),
})
export default connect(mapStateToProps, {changeCurrency, changeShipNumber}) (HeaderTopBarMenuContainer);