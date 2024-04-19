import React from 'react';
import BlogPost from "../../../../../shared/components/BlogItem/BlogPost";
import {useAppSelector} from "../../../../../../../app/store/hooks";
import {blogListSelectors} from "../store/selectors/blog-list-selectors";
import {Icons} from "../../../../../../../shared/components/Icons/Icons";

const BlogListPosts: React.FC = () => {
    const {blogPosts, isLoading} = useAppSelector(blogListSelectors)
    return !isLoading ? <div className="blog-list__posts">
        {blogPosts.map(post =>
            <BlogPost classnames={"blog__post post-blog"}
                      key={post.id} id={post.id} imageUrl={post.attributes.imageUrl!}
                      description={post.attributes.description!}
                      {...post.attributes}/>)}
    </div> : <Icons.loader/>
};

export default BlogListPosts;