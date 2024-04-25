import React from 'react';
import {cn} from "../../../../../shared/utils";
import {Title} from "../../../../../shared/components/Title/Title";
import BlogCategory from "./components/BlogCategory";
import Image from "../../../../../shared/components/Image/Image";
import {PBlogPost} from "./types/blog-item.types";
import RouterLink from "../../../../../shared/components/links/RouterLink";
import {ROUTES} from "../../../../../app/router/router";

const BlogPost: React.FC<PBlogPost> = ({category, id, description, classnames, title, imageUrl}) => {
    const url = imageUrl.data.attributes.formats.medium!.url
    const isFeatured = classnames === "featured-post"
    return <RouterLink url={ROUTES.blogCard(id)} classnames={classnames}>
        <article className={cn(`${classnames}__article`)}>
            <Image classnames={cn({
                "news-featured-image": isFeatured
            })} name={classnames} url={url} alt={"BlogImage"}/>
            <div className={`post-blog__content`}>
                <BlogCategory category={category}/>
                <Title text={title} tag={"h3"}
                       classnames={`post-blog__title item-title_${isFeatured ? "small" : "big"}`}/>
                {description && <p className="post-blog__text">{description}</p>}
            </div>
        </article>
    </RouterLink>
};

export default BlogPost;