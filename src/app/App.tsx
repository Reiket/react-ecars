import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import {Provider} from "react-redux";
import store from "./store/store"
import {Icons} from "../shared/components/Icons/Icons";
import {capitalizeFirstLetter} from "../shared/utils";
//React lazy-loading
const Home = React.lazy(() => import("../components/Pages/components/Home/Home"))
const Details = React.lazy(() => import("../components/Pages/components/Details/Details"))
const Favorites = React.lazy(() => import("../components/Pages/components/Favorites/Favorites"))
const About = React.lazy(() => import("../components/Pages/components/About/About"))
const FAQ = React.lazy(() => import("../components/Pages/components/Faq/Faq"))
const Catalog = React.lazy(() => import("../components/Pages/components/Catalog/Catalog"))
const News = React.lazy(() => import("../components/Pages/components/News/News"))

function App() {
    const location = useLocation();
    const title = capitalizeFirstLetter(location.pathname.replace("/", ""))
    React.useEffect(() => {
        document.title = location.pathname === "/" ? document.title : title
    }, [location.pathname])
  return (
      <Provider store={store}>
          <React.Suspense fallback={<Icons.loader/>}>
              <Routes>
                  <Route element={<MainLayout/>} path={"/"}>
                      <Route element={<Home/>} path={"/"}/>
                      <Route element={<Details/>} path={"/:id"}/>
                      <Route element={<Favorites/>} path={"/favorites"}/>
                      <Route element={<About/>} path={"/about"}/>
                      <Route element={<FAQ/>} path={"/faq"}/>
                      <Route element={<Catalog/>} path={"/catalog"}/>
                      <Route element={<News/>} path={"/news"}/>
                  </Route>
              </Routes>
          </React.Suspense>
      </Provider>
  );
}

export default App;

