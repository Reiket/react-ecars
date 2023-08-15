import React from 'react';
import Navbar from "./Navbar/Navbar";
import HeaderUtils from "./HeaderUtils";
import {AiOutlineClose} from "react-icons/ai";

const HeaderBottom = () => {
    const [isBurger, setIsBurger] = React.useState(false);

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
                    <HeaderUtils/>
                    <a href="/" className="header-bottom__btn green-button">Get a quote</a>
                </div>
                <form action="" className={"header-bottom__form header-bottom__form_bottom"}>
                    <input className={"header-bottom__input"} type="text" placeholder={"Search"}/>
                    <button className="header-bottom__btn"><AiOutlineClose/></button>
                </form>
            </div>
        </div>
    );
};

export default HeaderBottom;