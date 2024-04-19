import React from 'react';
import {useParams} from "react-router-dom";
import {blogCardSelector, countRelatedPostsSelector, isLoadingSelector} from "./store/selectors/blog-card-selectors";
import CardInfo from "./components/CardInfo/CardInfo";
import CardShare from "./components/CardShare/CardShare";
import CardSubscribe from "./components/CardSubscribe/CardSubscribe";
import Container from "../../../../shared/components/Container/Container";
import {useAppDispatch, useAppSelector} from "../../../../app/store/hooks";
import {Icons} from 'src/shared/components/Icons/Icons';
import {fetchBlogCard} from "./store/thunks/fetchBlogCard";
import CardRelated from "./components/CardRelated/CardRelated";
import {fetchRelatedPosts} from "./store/thunks/fetchAllNews";

const BlogCard: React.FC = () => {
    const {blogCardId} = useParams();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(isLoadingSelector);
    const {id, attributes} = useAppSelector(blogCardSelector)
    const countRelatedPosts = useAppSelector(countRelatedPostsSelector)
    React.useEffect(() => {
        dispatch(fetchBlogCard(Number(blogCardId)))
    }, [blogCardId, dispatch])
    React.useEffect(() => {
        if (attributes && attributes.category) {
            dispatch(fetchRelatedPosts(attributes.category, id, countRelatedPosts))
        }
    }, [dispatch, id, attributes])
    React.useEffect(() => {
        if (attributes && attributes.title) {
            document.title = attributes.title
        }
    }, [attributes])
    return !isLoading  ? <div className="blog-card">
        <Container classnames={"blog-card"}>
            <CardInfo/>
            <CardShare/>
            <CardSubscribe/>
        </Container>
        <CardRelated/>
    </div> : <Icons.loader/>
}

export default BlogCard;