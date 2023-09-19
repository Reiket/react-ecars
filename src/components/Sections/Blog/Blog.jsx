import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import BlogItem from "./BlogItem";
import NewsLoader from "../../Loader/NewsLoader";

const Blog = ({posts}) => {
    return (
        <section className="section__blog blog">
            <div className="blog__container">
                <div className="blog__top">
                    <h2 className="blog__title title">Read our blog</h2>
                    <a href="/" className="blog__all all">All articles <RiArrowRightLine/></a>
                </div>
                <div className="blog__body">
                    {posts.length === 0 ? (
                        [...Array(3)].map((_, id) => <NewsLoader key={id}/>)
                    ) : (
                        posts.map((item) => <BlogItem key={item.id} isMoving={true}
                                                      imageUrl={item.imageUrl}
                                                      category={item.category}
                                                      title={item.title} text={item.text}/>)
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;