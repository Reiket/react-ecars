import React from 'react';
import {connect} from "react-redux";
import Blog from "./Blog";
import {fetchNews} from "../../../redux/reducers/news-reducer";
import {selectNewsPosts} from "../../../redux/selectors/news-selector";

const BlogContainer = ({posts, fetchNews}) => {
    React.useEffect(() => {
        fetchNews();
    }, [])
    return (
        <Blog posts={posts}/>
    );
};

let mapStateToProps = (state) => ({
    posts: selectNewsPosts(state),
})

export default connect(mapStateToProps, {fetchNews}) (BlogContainer);