import React from 'react';
import {AiOutlineClose, AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";

const HeaderUtils = ({onClickToSearch, isSearch}) => {
    return (
        <div className="header-bottom__utils">
            <form action="" className={isSearch ? "header-bottom__form header-bottom__form_none active" : "header-bottom__form header-bottom__form_none"}>
                <input className={"header-bottom__input"} type="text" placeholder={"Search"}/>
                <button className="header-bottom__btn"><AiOutlineClose/></button>
            </form>
            <AiOutlineSearch onClick={onClickToSearch} className="header-bottom__icon header-bottom__icon_none"/>
            <AiOutlineHeart className="header-bottom__icon header-bottom__icon_none"/>
            <BiUserCircle className="header-bottom__icon header-bottom__icon_none"/>
        </div>
    );
};

export default HeaderUtils;









