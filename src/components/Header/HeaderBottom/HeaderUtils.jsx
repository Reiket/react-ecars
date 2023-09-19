import React from 'react';
import {AiOutlineClose, AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";

const HeaderUtils = ({onClickToSearch, isSearch, searchValue, value, handleSearchValue, onClickToClear, inputRef}) => {
    return (
        <div className="header-bottom__utils">
            <form action="" className={isSearch ? "header-bottom__form header-bottom__form_none active" : "header-bottom__form header-bottom__form_none"}>
                <input value={value} ref={inputRef} onChange={handleSearchValue} className={"header-bottom__input"} type="text" placeholder={"Search"}/>
                {searchValue.length > 0 && <button onClick={onClickToClear} className="header-bottom__btn"><AiOutlineClose/></button>}
            </form>
            <AiOutlineSearch onClick={onClickToSearch} className="header-bottom__icon header-bottom__icon_none"/>
            <Link to={"/favorites"}><AiOutlineHeart className="header-bottom__icon header-bottom__icon_none"/></Link>
            <Link to={"/login"}><BiUserCircle className="header-bottom__icon header-bottom__icon_none"/></Link>
        </div>
    );
};

export default HeaderUtils;


// Приклад вкладеного масиву
const nestedArray = [1, 2, [3, 4, [5, 6]]];

// Використання методу flat() зі значенням за замовчуванням (глибина = 1)
const flatArray = nestedArray.flat();
console.log(flatArray);
// Результат: [1, 2, 3, 4, [5, 6]]

// Використання методу flat() зі значенням глибини (depth) більше 1
const deeplyFlatArray = nestedArray.flat(2);
console.log(deeplyFlatArray);
// Результат: [1, 2, 3, 4, 5, 6]













