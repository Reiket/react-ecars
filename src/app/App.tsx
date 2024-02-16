import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import {Provider} from "react-redux";
import store from "./store/store"
import Loader from "../shared/components/Loader/Loader";
//React lazy-loading
const Home = React.lazy(() => import("../components/Pages/components/Home/Home"))
const Details = React.lazy(() => import("../components/Pages/components/Details/Details"))
const Favorites = React.lazy(() => import("../components/Pages/components/Favorites/Favorites"))


function App() {
  return (
      <Provider store={store}>
          <React.Suspense fallback={<div className={"loader"}>
              <Loader classnames={"loader__item"}/>
          </div>}>
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

