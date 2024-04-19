import React from 'react';
import {Title} from "../../../../shared/components/Title/Title";
import Text from "../../../../shared/components/Title/Text";
import Container from "../../../../shared/components/Container/Container";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import BlogList from "./components/BlogList/BlogList";


const Blog: React.FC = () => {
    return <div className="page__blog blog">
        <Container classnames={"blog"}>
            <Title tag={"h1"} text={"Blog & News"} classnames={"page-title page-title_text"}/>
            <Text classnames={"text_sub"} text={"Company and car market news, as well as car selection guides and car reviews from our authors."}/>
            <div className="blog__body">
                <BlogList/>
                <FeaturedPosts/>
            </div>
        </Container>
    </div>
};

export default Blog;