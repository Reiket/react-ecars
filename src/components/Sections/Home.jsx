import React from 'react';
import Intro from "./Intro/Intro";
import BottomIntro from "./Intro/BottomIntro";
import Send from "./Send/Send";
import Works from "./Works/Works";
import Why from "./Why/Why";
import Communication from "./Communication/Communication";
import OffersContainer from "./Offers/OffersContainer";
import BrandsContainer from "./Brands/BrandsContainer";
import CommentsContainer from "./Comments/CommentsContainer";
import BlogContainer from "./Blog/BlogContainer";

const Home = () => {
    return (
       <>
           <Intro/>
           <BottomIntro/>
           <OffersContainer/>
            <BrandsContainer/>
           <Send/>
           <Works/>
           <Why/>
           <CommentsContainer/>
           <BlogContainer/>
           <Communication/>
       </>
    );
};

export default Home;