import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {SearchFormPropsType} from "../shared.types";


const SearchForm: React.FC<SearchFormPropsType> = ({isSearch}) => {
    return <form action="" className={isSearch ? "header-bottom__form header-bottom__form_bottom active_bottom" : "header-bottom__form header-bottom__form_bottom"}>
        <input className={"header-bottom__input"} type="text" placeholder={"Search..."}/>
        { <button className="header-bottom__btn"><AiOutlineClose/></button>}
    </form>
}

export default SearchForm;