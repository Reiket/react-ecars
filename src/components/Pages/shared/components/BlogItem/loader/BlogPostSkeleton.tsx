import React from 'react';
import {cn} from "../../../../../../shared/utils";
import {PBlogPostSkeleton} from "./types/blog-post-skeleton.types";

const BlogPostSkeleton: React.FC<PBlogPostSkeleton> = ({classnames}) => {
    const isFeatured = classnames === "featured-post-skeleton"
    return <div className={cn("blog-skeleton", classnames)}>
        <div className="blog-skeleton__image"></div>
        <div className="blog-skeleton__content">
            <div className={"blog-skeleton__category"}></div>
            <div className="blog-skeleton__title"></div>
            {!isFeatured && <div className="blog-skeleton__text"></div>}
        </div>
    </div>
};

export default BlogPostSkeleton;