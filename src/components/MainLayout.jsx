import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";

const MainLayout = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;