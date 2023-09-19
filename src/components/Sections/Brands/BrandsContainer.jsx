import React from 'react';
import {selectBrands, selectBrandsToShow} from "../../../redux/selectors/brands-selector";
import {connect} from "react-redux";
import {fetchBrands} from "../../../redux/reducers/cars-reducer";
import Brands from "./Brands";

const BrandsContainer = ({fetchBrands, brands, }) => {
    React.useEffect(() => {
        fetchBrands();
    }, [])
    return (
        <Brands brands={brands}/>
    );
};

let mapStateToProps = (state) => ({
    brands: selectBrands(state),
})

export default connect(mapStateToProps, {fetchBrands})(BrandsContainer);