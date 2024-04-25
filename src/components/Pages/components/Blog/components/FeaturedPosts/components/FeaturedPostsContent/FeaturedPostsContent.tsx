import React from 'react';
import {PFeaturedPostContent} from "./types/featured-post-content.types";
import BlogPost from "../../../../../../shared/components/BlogItem/BlogPost";
import BlogPostSkeleton from "../../../../../../shared/components/BlogItem/loader/BlogPostSkeleton";

const FeaturedPostsContent: React.FC<PFeaturedPostContent>  = ({posts, skeletonCount, isLoading}) => {
    return <div className={"featured-posts__content"}>
        {!isLoading ? (
            posts.map((post) => <BlogPost classnames={"featured-post"} id={post.id} key={post.id} imageUrl={(post.attributes.imageUrl!)} {...post.attributes} />)
        ) : (
            [...Array(skeletonCount)].map((_, id) => <BlogPostSkeleton key={id} classnames={"featured-post-skeleton"}/>)
        )}
    </div>
};

export default FeaturedPostsContent;
