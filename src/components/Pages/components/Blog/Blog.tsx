import React from 'react';
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import BlogList from "./components/BlogList/BlogList";
import Page from "../../../../shared/components/pages/Page";


const Blog: React.FC = () => {
    return <Page name={"blog"} title={"Blog & News"} text={"Company and car market news, as well as car selection guides and car reviews from our authors."}>
        <div className="blog__body">
            <BlogList/>
            <FeaturedPosts/>
        </div>
    </Page>
};

export default Blog;