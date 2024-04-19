import React from 'react';
import BlogPost from "../../../../shared/components/BlogItem/BlogPost";
import BlogLoader from "./components/BlogLoader/BlogLoader";
import {articlesSelector} from "./store/selector/articles-selector";
import {fetchArticlePosts} from "./store/thunks/fetchArticlePosts";
import {useAppDispatch, useAppSelector} from "../../../../../../app/store/hooks";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import ArticlesTop from "./components/ArticlesTop";

const Articles: React.FC = () => {
    const {articlePosts, countArticlePosts, isLoading} = useAppSelector(articlesSelector)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchArticlePosts(countArticlePosts))
    }, [])
    return <PageSection name={"articles"}>
       <ArticlesTop/>
        <div className="articles__body">
            {!isLoading ? (
                [...Array(countArticlePosts)].map((_, id) => <BlogLoader key={id}/>)
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