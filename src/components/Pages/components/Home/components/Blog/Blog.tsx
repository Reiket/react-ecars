import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import BlogItem from "./components/BlogItem";
import NewsLoader from "../../../../../Other/Loader/NewsLoader";
import {fetchNews} from "../../../../../../redux/reducers/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectNewsPosts} from "../../../../../../redux/selectors/news-selector";
import {AppDispatch} from "../../../../../../redux/store";
import Title from "../../../../../Shared/components/Title";

const Blog: React.FC = () => {
    const posts = useSelector(selectNewsPosts)
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchNews())
    }, [])
    return (
        <section className="section__blog blog">
            <div className="blog__container">
                <div className="blog__top">
                    <Title text={"Read our blog"} classnames={"blog__title"}/>
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