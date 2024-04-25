import React from 'react';
import {Title} from "../../../../../../../../shared/components/Title/Title";
import BlogListCategory from "./components/BlogListCategory";
import {PBlogListCategories} from "./types/blog-list-categories.types";

const categories = ["news", "guides", "reviews"]

const BlogListCategories: React.FC<PBlogListCategories> = ({onClickToCategory}) => {
    return  <ul className="blog-list__categories">
        <Title tag={"h5"} classnames={"blog-list__name"} text={"Categories:"}/>
        {categories.map((c, id) =>
            <BlogListCategory key={id} categoryBlog={c} onClickToCategory={onClickToCategory}/>
        )}
    </ul>
};

export default BlogListCategories;