import React from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GetQuotePopup from "../../shared/components/Popup/components/GetQuotePopup/GetQuotePopup";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectFilters} from "../Pages/components/Home/components/Offers/store/selector/offers-selector";
import {fetchFavorites} from "../Pages/components/Favorites/store/thunks/fetchFavorites";
import {useFilters} from "./components/Header/hooks/useFilters";
import ContactUsPopup from "../../shared/components/Popup/components/ContactUsPopup/ContactUsPopup";
import {blogListSelectors} from "../Pages/components/Blog/components/BlogList/store/selectors/blog-list-selectors";
import {actions} from "./store/actions/layout-actios";
import {useDispatch} from "react-redux";
const MainLayout: React.FC = () => {
    const pathname = useParams();
    const {shipNumber} = useAppSelector(selectFilters)

    const {currentPage} = useAppSelector(blogListSelectors)
    const {isFilterLoading} = useFilters();
    const location = useLocation();
    // React.useEffect(() => {
    //     if (!isFilterLoading) {
    //         dispatch(fetchFavorites(shipNumber))
    //     }
    // }, [shipNumber, isFilterLoading]);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, currentPage]);
    return (
       <>
           <ContactUsPopup/>
           {/*<GetQuotePopup/>*/}
           <Header/>
           <main>
               <Outlet/>
           </main>
           <Footer/>
       </>
    );
};

export default MainLayout;