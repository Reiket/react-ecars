import React from 'react';
import {capitalizeFirstLetter} from "../../../../../../shared/utils";
interface TBlogCategory {
    category: string
}
const BlogCategory: React.FC<TBlogCategory> = ({category}) => {
    return <button className={`news-category news-category_${category}`}>{capitalizeFirstLetter(category)}</button>
};

export default BlogCategory;