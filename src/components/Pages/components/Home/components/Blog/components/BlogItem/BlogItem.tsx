import React from 'react';
import {blogCategory, BlogItemPropsType} from "./types/blog-item.types";

const BlogItem: React.FC<BlogItemPropsType> = ({isMoving, title, category, text, imageUrl}) => {
    return (
        <div className={isMoving ? "blog__item item-blog" : "blog__item item-blog item-blog_big"}>
            <div className="item-blog__image">
                <img src={imageUrl} alt="Blog"/>
            </div>
            <div className="item-blog__content">
                <button className={`item-blog__category item-blog__category_${blogCategory[category - 1].color}`}>{blogCategory[category - 1].name}</button>
                <h3 className="item-blog__title">{title}</h3>
                <div className="item-blog__text">{text}</div>
            </div>
        </div>
    );
};

export default BlogItem;