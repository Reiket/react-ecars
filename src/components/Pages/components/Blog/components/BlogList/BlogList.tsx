import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../../../app/store/hooks";
import Pagination from "../../../../../../shared/components/Pagination/Pagination";
import Section from "../../../../../../shared/components/Section/Section";
import {blogListSelectors,} from "./store/selectors/blog-list-selectors";
import qs from "qs";
import {BlogQueryParams} from "./types/blog-list.types";
import {fetchBlogPosts} from "./store/thunk/fetchBlogPosts";
import {useLocation} from "react-router-dom";
import {useNavigateSearch} from "../../../../../../shared/hooks/useNavigateSearch";
import BlogListPosts from "./components/BlogListPosts";
import BlogListCategories from "./components/BlogListCategories/BlogListCategories";

const BlogList: React.FC = () => {
    const state = useAppSelector(blogListSelectors)
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigateSearch()

    React.useEffect(() => {
        const parsed = qs.parse(location.search.substring(1)) as BlogQueryParams;
        const actualPage =  parsed.page ? Number(parsed.page) : 1;
        const actualCategory = parsed.category ? parsed.category.toString() : null
        dispatch(fetchBlogPosts(actualCategory, actualPage, state.pageSize))
    }, []);

    React.useEffect(() => {
        const query: Partial<BlogQueryParams> = {}
        if (state.category !== null) query.category = String(state.category)
        if (state.currentPage !== 1) query.page = String(state.currentPage)
        navigate("/blog", qs.stringify(query));
    }, [state.currentPage, state.category])

    const onClickToCategory = (category: string) => {
        dispatch(fetchBlogPosts(category, 1, state.pageSize))
    }
    const onClickToPage = (page: number) => {
        dispatch(fetchBlogPosts(state.category, page, state.pageSize))
    }

    return <Section name={"blog-list"}>
        <BlogListCategories onClickToCategory={onClickToCategory}/>
        <BlogListPosts/>
        {state.totalBlogPosts > state.pageSize && <Pagination onClick={onClickToPage} isLoading={state.isLoading} currentPage={state.currentPage} total={state.totalBlogPosts} size={state.pageSize}/>}
    </Section>

};

export default BlogList;