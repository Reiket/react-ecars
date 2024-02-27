import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GetQuotePopup from "../../shared/components/Popup/components/GetQuotePopup/GetQuotePopup";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectFilters} from "../Pages/components/Home/components/Offers/store/selector/offers-selector";
import {fetchFavorites} from "../Pages/components/Favorites/store/thunks/fetchFavorites";

const MainLayout: React.FC = () => {
    const pathname = useParams();
    const {shipNumber} = useAppSelector(selectFilters)
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchFavorites(shipNumber))
    }, [shipNumber]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
       <>
           <GetQuotePopup/>
           <Header/>
           <main>
               <Outlet/>
           </main>
           <Footer/>
       </>
    );
};

export default MainLayout;