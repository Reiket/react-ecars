import React from 'react';
import Intro from "./components/Intro/Intro";
import BottomIntro from "./components/BottomIntro/BottomIntro";
import Send from "./components/Send/Send";
import Works from "./components/Works/Works";
import Why from "./components/Why/Why";
import Communication from "./components/Communication/Communication";
import Offers from "./components/Offers/Offers";
import Comments from "./components/Comments/Comments";
import Brands from "./components/Brands/Brands";
import Blog from "./components/Blog/Blog";

const Home: React.FC = () => {
    return (
       <>
           <Intro/>
           <BottomIntro/>
           <Offers/>
           <Brands/>
           <Send/>
           <Works/>
           <Why/>
           <Comments/>
           <Blog/>
           <Communication/>
       </>
    );
};

export default Home;