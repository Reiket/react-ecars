import React from 'react';
import {AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {useSelector} from "react-redux";
import {
    selectFilters
} from "../../../../../../../Pages/components/Home/components/Offers/store/selector/offers-selector";
import RouterLink from "../../../../../../../../shared/components/links/RouterLink";

const BarUtils: React.FC = () => {
    const {shipNumber, currency} = useSelector(selectFilters);

    return <div className="header-bar__utils bar-utils">
        <AiOutlineSearch className="bar-utils__icon"/>
        <RouterLink url={`/favorites?ship=${shipNumber}&currency=${currency}`}><AiOutlineHeart className="bar-utils__icon"/></RouterLink>
        <RouterLink url={"/login"}><BiUserCircle className="bar-utils__icon"/></RouterLink>
    </div>
};

export default BarUtils;












