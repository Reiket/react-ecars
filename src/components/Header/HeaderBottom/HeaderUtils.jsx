import React from 'react';
import {AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";

const HeaderUtils = () => {
    return (
        <div className="header-bottom__utils">
            <AiOutlineSearch className="header-bottom__icon"/>
            <AiOutlineHeart className="header-bottom__icon header-bottom__icon_none"/>
            <BiUserCircle className="header-bottom__icon header-bottom__icon_none"/>
        </div>
    );
};

export default HeaderUtils;