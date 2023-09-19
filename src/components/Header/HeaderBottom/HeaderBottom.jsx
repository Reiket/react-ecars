import React from 'react';
import Navbar from "./Navbar/Navbar";
import HeaderUtils from "./HeaderUtils";
import {AiOutlineClose} from "react-icons/ai";
import debounce from "lodash.debounce";

const HeaderBottom = ({setSearchValue, searchValue}) => {
    const [value, setValue] = React.useState();
    const [isBurger, setIsBurger] = React.useState(false);
    const [isSearch, setIsSearch] = React.useState(false);
    const inputRef = React.useRef();

    const handleSearchValue = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 550),
        []
    )
    const onClickToSearch = () => {
        setIsSearch((prev) => !prev);
    }

    const onClickToClear = () => {
        setSearchValue("");
        setValue("");
        inputRef.current.focus();
    }

    const onClickBurger = () => {
        setIsBurger(prev => !prev);
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
    }
    return (
        <div className="header__bottom header-bottom">
            <div className="header-bottom__container">
                <div className="header-bottom__body">
                    <div className={isBurger ? "header-bottom__logo active" : "header-bottom__logo"}>
                        <button onClick={onClickBurger} className={isBurger ? "icon-menu _active" : "icon-menu"}><span></span></button>
                        <a href="/"><img src="/assets/image/logo-site/logo.svg" alt="Logo"/></a>
                    </div>
                    <Navbar isBurger={isBurger}/>
                    <HeaderUtils searchValue={searchValue} onClickToClear={onClickToClear} handleSearchValue={handleSearchValue} value={value} inputRef={inputRef} onClickToSearch={onClickToSearch} isSearch={isSearch}/>
                    <a href="/" className="header-bottom__btn green-button">Get a quote</a>
                </div>
                <form action="" className={isSearch ? "header-bottom__form header-bottom__form_bottom active_bottom" : "header-bottom__form header-bottom__form_bottom"}>
                    <input ref={inputRef} onChange={handleSearchValue} value={value} className={"header-bottom__input"} type="text" placeholder={"Search..."}/>
                    {searchValue.length > 0 && <button onClick={onClickToClear} className="header-bottom__btn"><AiOutlineClose/></button>}
                </form>
            </div>
        </div>
    );
};

export default HeaderBottom;