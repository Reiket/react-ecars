import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import BlogItem from "./BlogItem";

const Blog = () => {
    return (
        <section className="section__blog blog">
            <div className="blog__container">
                <div className="blog__top">
                    <h2 className="blog__title title">Read our blog</h2>
                    <a href="/" className="blog__all all">All articles <RiArrowRightLine/></a>
                </div>
                <div className="blog__body">
                    <BlogItem isMoving={true}/>
                </div>
            </div>
        </section>
    );
};

export default Blog;