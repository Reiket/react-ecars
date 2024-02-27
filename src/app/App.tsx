import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import {Provider} from "react-redux";
import store from "./store/store"
import {Icons} from "../shared/components/Icons/Icons";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {selectFilters} from "../components/Pages/components/Home/components/Offers/store/selector/offers-selector";
import {fetchFavorites} from "../components/Pages/components/Favorites/store/thunks/fetchFavorites";
//React lazy-loading
const Home = React.lazy(() => import("../components/Pages/components/Home/Home"))
const Details = React.lazy(() => import("../components/Pages/components/Details/Details"))
const Favorites = React.lazy(() => import("../components/Pages/components/Favorites/Favorites"))


function App() {
  return (
      <Provider store={store}>
          <React.Suspense fallback={<Icons.loader/>}>
              <Routes>
                  <Route element={<MainLayout/>} path={"/"}>\
                      <Route element={<Home/>} path={"/"}/>
                      <Route element={<Details/>} path={"/:id"}/>
                      <Route element={<Favorites/>} path={"/favorites"}/>
                  </Route>
              </Routes>
          </React.Suspense>
      </Provider>
  );
}

export default App;

