import React from 'react';
import BlogItem from "../Sections/Blog/BlogItem";

const NewsList = ({isMoving}) => {
    return (
        <div className="news__list news-list">
            <ul className="news-list__categories">
                <h5 className="news-list__name">Categories:</h5>
                <li className="news-list__category">News</li>
                <li className="news-list__category">Guides</li>
                <li className="news-list__category">Reviews</li>
            </ul>
            <div className="news-list__items">
                <BlogItem isMoving={isMoving}/>
                <BlogItem isMoving={isMoving}/>
                <BlogItem isMoving={isMoving}/>
                <BlogItem isMoving={isMoving}/>
                <BlogItem isMoving={isMoving}/>
                <BlogItem isMoving={isMoving}/>
                <BlogItem isMoving={isMoving}/>
            </div>
        </div>
    );
};

export default NewsList;