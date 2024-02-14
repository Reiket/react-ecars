import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import BlogItem from "./components/BlogItem/BlogItem";
import BlogLoader from "./components/BlogLoader/BlogLoader";
import {useDispatch, useSelector} from "react-redux";
import {selectNewsPosts} from "./store/selector/news-selector";
import Title from "../../../../../../shared/components/Title/Title";
import {AppDispatch} from "../../../../../../app/store/types/store.types";
import {fetchNews} from "./store/thunks/fetchNews";
import AllLink from "../../../../../../shared/components/Title/AllLink";

const Blog: React.FC = () => {
    const itemCount = 3;
    const posts = useSelector(selectNewsPosts)
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchNews())
    }, [])
    return (
        <section className="section__blog blog">
            <div className="blog__container">
                <div className="blog__top">
                    <Title text={"Read our blog"}/>
                    <AllLink text={"All articles"} link={"/"} classnames={"blog__all"}>
                        <RiArrowRightLine/>
                    </AllLink>
                </div>
                <div className="blog__body">
                    {posts.length === 0 ? (
                        [...Array(itemCount)].map((_, id) => <BlogLoader key={id}/>)
                    ) : (
                        posts.map((item) => <BlogItem key={item.id} isMoving={true} {...item}/>)
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;