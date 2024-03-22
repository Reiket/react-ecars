import BlogItem from "../Home/components/Blog/components/BlogItem/BlogItem";
import BlogLoader from "../Home/components/Blog/components/BlogLoader/BlogLoader";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../app/store/hooks";
import {selectNewsPosts} from "../Home/components/Blog/store/selector/news-selector";
import {fetchNews} from "../Home/components/Blog/store/thunks/fetchNews";

type TNewsList = {
    isMoving: boolean
}
const NewsList: React.FC<TNewsList> = ({isMoving}) => {
    const itemCount = 3;
    const posts = useAppSelector(selectNewsPosts)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchNews())
    }, [])
    return  <div className="news__list news-list">
        <ul className="news-list__categories">
            <h5 className="news-list__name">Categories:</h5>
            <li className="news-list__category">News</li>
            <li className="news-list__category">Guides</li>
            <li className="news-list__category">Reviews</li>
        </ul>
        <div className="news-list__items">
            <div className="blog__body">
                {posts.length === 0 ? (
                    [...Array(itemCount)].map((_, id) => <BlogLoader key={id}/>)
                ) : (
                    posts.map((item) => <BlogItem key={item.id} isMoving={true} {...item}/>)
                )}
            </div>
        </div>
    </div>
};

export default NewsList;