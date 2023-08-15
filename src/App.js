import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import React from 'react';
import BlogItem from "./components/Sections/Blog/BlogItem";
import "./scss/base/swiper.scss"
import News from "./components/News/News";
import Home from "./components/Sections/Home";
import Find from "./components/Find/Find";
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Home/>
        {/*<Find/>*/}
        {/*<Details/>*/}
        {/*<Login/>*/}
        {/*<Register/>*/}
        {/*<ForgotPass/>*/}
        {/*<CheckEmail/>*/}
        {/*<NewPass/>*/}
        {/*<Reset/>*/}
        {/*<News/>*/}

        <Footer/>
    </div>
  );
}

export default App;

