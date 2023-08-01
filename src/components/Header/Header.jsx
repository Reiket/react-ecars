import React from 'react';
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
    return (
        <header className="header">
            <HeaderTopBar/>
            <HeaderBottom/>
        </header>
    );
};

export default Header;