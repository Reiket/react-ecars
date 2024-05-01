import React from 'react';
import HeaderPanel from "./components/HeaderPanel/HeaderPanel";
import HeaderBar from "./components/HeaderBar/HeaderBar";

const Header: React.FC = () => {
    return (
        <header className="header">
            <HeaderPanel/>
            <HeaderBar/>
        </header>
    );
};

export default Header;