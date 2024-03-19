import React from 'react';
import {AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    selectFilters
} from "../../../../../../../Pages/components/Home/components/Offers/store/selector/offers-selector";

type PropsType = {
    isSearch: boolean
    onClickToSearch: () => void
}
const HeaderUtils: React.FC<PropsType> = ({isSearch, onClickToSearch}) => {
    const {shipNumber, currency} = useSelector(selectFilters);

    return <div className="header-bottom__utils">
        <AiOutlineSearch onClick={onClickToSearch} className="header-bottom__icon header-bottom__icon_none"/>
        <Link to={`/favorites?ship=${shipNumber}&currency=${currency}`}><AiOutlineHeart className="header-bottom__icon header-bottom__icon_none"/></Link>
        <Link to={"/login"}><BiUserCircle className="header-bottom__icon header-bottom__icon_none"/></Link>
    </div>
};

export default HeaderUtils;












