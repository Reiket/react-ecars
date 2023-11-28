import React from 'react';
import "../scss/base/swiper.scss"
import News from "../components/News/News";
import Home from "../components/Pages/components/Home/Home";
import Find from "../components/Find/Find";
import Login from "../components/Login/Login";
import {Route, Routes} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import {Provider} from "react-redux";
import store from "../redux/store"
import Favorites from "../components/Pages/components/Favorites/Favorites";
import Details from "../components/Pages/components/Details/Details";

function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route element={<MainLayout/>} path={"/"}>
                  <Route element={<Home/>} path={"/"}/>
                  <Route element={<Details/>} path={"/:id"}/>
                  <Route element={<Find/>} path={"/catalog"}/>
                  <Route element={<Login/>} path={"/login"}/>
                  <Route element={<News/>} path={"/news"}/>
                  <Route element={<Favorites/>} path={"/favorites"}/>
              </Route>
          </Routes>
      </Provider>
  );
}

export default App;

