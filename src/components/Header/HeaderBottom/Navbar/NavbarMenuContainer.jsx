import React from 'react';
import {connect} from "react-redux";
import {changeCurrency, changeShipNumber} from "../../../../redux/reducers/offers-reducer";
import NavbarMenu from "./NavbarMenu";
import {selectCurrency, selectShipNumber} from "../../../../redux/selectors/offers-selector";

const NavbarMenuContainer = ({changeCurrency, changeShipNumber, isBurger, shipNumber, currency}) => {
    return (
       <NavbarMenu currency={currency} changeCurrency={changeCurrency} changeShipNumber={changeShipNumber} isBurger={isBurger} shipNumber={shipNumber}/>
    );

};

let mapStateToProps = (state) => ({
    shipNumber: selectShipNumber(state),
    currency: selectCurrency(state),
})


export default connect(mapStateToProps, {changeCurrency, changeShipNumber}) (NavbarMenuContainer);