import React from 'react';

import {Outlet, useParams} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const MainLayout: React.FC = () => {
    const pathname = useParams();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
       <>
           <Header/>
           <main>
               <Outlet/>
           </main>
           <Footer/>
       </>
    );
};

export default MainLayout;