import React from 'react';
import BlogItem from "../Pages/components/Home/components/Blog/components/BlogItem";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import NewsList from "./NewsList";
import NewsPost from "./NewsPost";
import Title from "../../shared/components/Title/Title";

const News = () => {
    const [isMoving, setIsMoving] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => {
            setIsMoving(window.innerWidth < 1140);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <section className="section__news news">
            <div className="news__container">
                <div className="news__top">
                    <Title text={"Blog & News"} classnames={"news__title"}/>
                    <div className="news__text">Company and car market news, as well as car selection guides and car reviews from our authors.</div>
                </div>
                <div className="news__body">
                    <NewsList isMoving={isMoving}/>
                    <NewsPost isMoving={isMoving}/>
                </div>
            </div>
        </section>
    );
};

export default News;