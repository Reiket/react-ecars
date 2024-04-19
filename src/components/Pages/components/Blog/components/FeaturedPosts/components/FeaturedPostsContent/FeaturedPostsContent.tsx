import React from 'react';
import {PFeaturedPostContent} from "./types/featured-post-content.types";
import FeaturedPostSkeleton from "../FeaturedPost/FeaturedPostSkeleton";
import BlogPost from "../../../../../../shared/components/BlogItem/BlogPost";

const FeaturedPostsContent: React.FC<PFeaturedPostContent>  = ({posts, skeletonCount, isLoading}) => {
    return <div className={"featured-posts__content"}>
        {!isLoading ? (
            posts.map((post) => <BlogPost classnames={"featured-post"} key={post.id} imageUrl={(post.attributes.imageUrl!)} {...post.attributes} />)
        ) : (
            [...Array(skeletonCount)].map((_, id) => <FeaturedPostSkeleton key={id}/>)
        )}
    </div>
};

export default FeaturedPostsContent;
