import React from 'react';
import "./scss/base/swiper.scss"
import News from "./components/News/News";
import Home from "./components/Sections/Home";
import Find from "./components/Find/Find";
import Login from "./components/Login/Login";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import {Provider} from "react-redux";
import store from "../src/redux/store"
import FavoritesContainer from "./components/Favorites/FavoritesContainer";

function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route element={<MainLayout/>} path={"/"}>
                  <Route element={<Home/>} path={"/"}/>
                  <Route element={<Find/>} path={"/catalog"}/>
                  <Route element={<Login/>} path={"/login"}/>
                  <Route element={<News/>} path={"/news"}/>

                  <Route element={<FavoritesContainer/>} path={"/favorites"}/>

              </Route>
          </Routes>
      </Provider>
  );
}

export default App;

