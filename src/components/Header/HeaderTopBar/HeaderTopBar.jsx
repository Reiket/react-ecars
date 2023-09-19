import React from 'react';
import HeaderTopBarList from "./HeaderTopBarList";
import HeaderTopBarMenuContainer from "./HeaderTopBarMenu/HeaderTopBarMenuContainer";

const HeaderTopBar = () => {
    return (
        <div className="header__top header-top">
            <div className="header-top__container">
                <div className="header-top__body">
                    <div className="header-top__contacts header-contacts">
                        <HeaderTopBarList/>
                    </div>
                    <HeaderTopBarMenuContainer/>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopBar;