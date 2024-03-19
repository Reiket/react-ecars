import React from 'react';
import {TBlogItemProps} from "./types/blog-item.types";
import {capitalizeFirstLetter, cn} from "../../../../../../../../shared/utils";
import {Link} from "react-router-dom";
import {Title} from "../../../../../../../../shared/components/Title/Title";

const BlogItem: React.FC<TBlogItemProps> = ({isMoving, title, category, text, imageUrl}) => {
    return <Link to={"/"} className={cn("blog__item item-blog", {
        "item-blog": isMoving
    })}>
        <div className="item-blog__image">
            <img src={imageUrl} alt="Blog"/>
        </div>
        <div className="item-blog__content">
            <button className={`item-blog__category item-blog__category_${category}`}>{capitalizeFirstLetter(category)}</button>
            <Title text={title} tag={"h3"} classnames={"item-blog__title item-title_big"}/>
            <p className="item-blog__text">{text}</p>
        </div>
    </Link>
};

export default BlogItem;