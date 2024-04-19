import React from 'react';
import {SwiperSlide} from "swiper/react";
import 'src/shared/styles/swiper.scss';
import Slider from "../../../../../../../../shared/components/Slider/Slider";
import {newsPostsBreak} from "../../../../../../../../shared/utils/slider-breakpoints";
import FeaturedPostSkeleton from "../FeaturedPost/FeaturedPostSkeleton";
import {PFeaturedPostContent} from "./types/featured-post-content.types";
import BlogPost from "../../../../../../shared/components/BlogItem/BlogPost";

const FeaturedPostSlider: React.FC<PFeaturedPostContent> = ({posts, skeletonCount, isLoading}) => {
    return <Slider classnames={"featured-posts"} spaceBetween={16} slidesPerView={2} breakpoints={newsPostsBreak}>
        {!isLoading ? (
            posts.map(post =>  <SwiperSlide> <BlogPost classnames={"featured-post"} key={post.id} imageUrl={(post.attributes.imageUrl!)} {...post.attributes} /></SwiperSlide>)
        ) : [...Array(skeletonCount)].map((_, id) => <SwiperSlide><FeaturedPostSkeleton key={id}/></SwiperSlide>)}
    </Slider>
};

export default FeaturedPostSlider;