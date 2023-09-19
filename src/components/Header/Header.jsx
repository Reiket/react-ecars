import React from 'react';
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderBottomContainer from "./HeaderBottom/HeaderBottomContainer";

const Header = () => {
    return (
        <header className="header">
            <HeaderTopBar/>
            <HeaderBottomContainer/>
        </header>
    );
};

export default Header;