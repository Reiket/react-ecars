import { combineReducers } from "redux";
import featuredPostsReducer from "../components/FeaturedPosts/store/featured-posts-reducer";
import blogListReducer from "../components/BlogList/store/blog-list-reducer";

const blogReducer = combineReducers({
  featuredPosts: featuredPostsReducer,
  blogList: blogListReducer,
});

export default blogReducer;
