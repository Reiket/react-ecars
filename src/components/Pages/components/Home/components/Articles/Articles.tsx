import React from 'react';
import BlogPost from "../../../../shared/components/BlogItem/BlogPost";
import {articlesSelector} from "./store/selector/articles-selector";
import {fetchArticlePosts} from "./store/thunks/fetchArticlePosts";
import {useAppDispatch, useAppSelector} from "../../../../../../app/store/hooks";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import ArticlesTop from "./components/ArticlesTop";
import BlogPostSkeleton from "../../../../shared/components/BlogItem/loader/BlogPostSkeleton";

const Articles: React.FC = () => {
    const {articlePosts, countArticlePosts, isLoading} = useAppSelector(articlesSelector)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchArticlePosts(countArticlePosts))
    }, [countArticlePosts, dispatch])
    return <PageSection name={"articles"} classnames={"section-home-page"}>
       <ArticlesTop/>
        <div className="articles__body">
            {isLoading ? (
                [...Array(countArticlePosts)].map((_, id) => <BlogPostSkeleton key={id} classnames={"post-blog-skeleton"}/>)
            ) : (
                articlePosts.map((item) => {
                    let {attributes, id} = item
                    return <BlogPost classnames={"post-blog"} key={id} id={id} description={attributes.description} imageUrl={attributes.imageUrl!} {...attributes}/>
                })
            )}
        </div>
    </PageSection>
};


export default Articles;