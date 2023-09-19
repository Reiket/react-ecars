import React from 'react';
import {setSearchValue} from "../../../redux/reducers/offers-reducer";
import {connect} from "react-redux";
import HeaderBottom from "./HeaderBottom";
import {selectSearchValue} from "../../../redux/selectors/offers-selector";

const HeaderBottomContainer = ({setSearchValue, searchValue}) => {
    return (
       <HeaderBottom searchValue={searchValue} setSearchValue={setSearchValue}/>
    );
};


let mapStateToProps = (state) => ({
  searchValue: selectSearchValue(state),
})

export default connect(mapStateToProps, {setSearchValue})(HeaderBottomContainer);