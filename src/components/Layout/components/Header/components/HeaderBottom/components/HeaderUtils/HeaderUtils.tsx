import React from 'react';
import { AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import SearchForm from "../../shared/SearchForm/SearchForm";
type PropsType = {
    isSearch: boolean
    onClickToSearch: () => void
}
const HeaderUtils: React.FC<PropsType> = ({isSearch, onClickToSearch}) => {
    return (
        <div className="header-bottom__utils">
            {/*<SearchForm isSearch={window.innerWidth > 560 ? isSearch : false}/>*/}
            <AiOutlineSearch onClick={onClickToSearch} className="header-bottom__icon header-bottom__icon_none"/>
            <Link to={"/favorites"}><AiOutlineHeart className="header-bottom__icon header-bottom__icon_none"/></Link>
            <Link to={"/login"}><BiUserCircle className="header-bottom__icon header-bottom__icon_none"/></Link>
        </div>
    );
};

export default HeaderUtils;












