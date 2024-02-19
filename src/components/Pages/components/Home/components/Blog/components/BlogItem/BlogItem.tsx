import React from 'react';
import {TBlogItemProps} from "./types/blog-item.types";
import ItemTitle from "../../../../../../../../shared/components/Title/ItemTitle";
import {capitalizeFirstLetter, cn} from "../../../../../../../../shared/utils";
import {Link} from "react-router-dom";

const BlogItem: React.FC<TBlogItemProps> = ({isMoving, title, category, text, imageUrl}) => {
    return <Link to={"/"} className={cn("blog__item item-blog", {
        "item-blog": isMoving
    })}>
        <div className="item-blog__image">
            <img src={imageUrl} alt="Blog"/>
        </div>
        <div className="item-blog__content">
            <button className={`item-blog__category item-blog__category_${category}`}>{capitalizeFirstLetter(category)}</button>
            <ItemTitle text={title} classnames={"item-blog__title"} size={"big"}/>
            <p className="item-blog__text">{text}</p>
        </div>
    </Link>
};

export default BlogItem;