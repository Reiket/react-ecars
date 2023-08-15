import React from 'react';
import Intro from "./Intro/Intro";
import BottomIntro from "./Intro/BottomIntro";
import Offers from "./Offers/Offers";
import Brands from "./Brands/Brands";
import Send from "./Send/Send";
import Works from "./Works/Works";
import Why from "./Why/Why";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Communication from "./Communication/Communication";

const Home = () => {
    return (
       <>
           <Intro/>
           <BottomIntro/>
           <Offers/>
           <Brands/>
           <Send/>
           <Works/>
           <Why/>
           <About/>
           <Blog/>
           <Communication/>
       </>
    );
};

export default Home;