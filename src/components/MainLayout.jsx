import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";
import Scroll from "./Other/Scroll";

const MainLayout = () => {
    return (
        <div className={"wrapper"}>
            <Scroll/>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;