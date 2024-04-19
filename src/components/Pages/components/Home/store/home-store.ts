import {combineReducers} from "redux";
import brandsReducer from "../components/Brands/store/brands-reducer";
import articlesReducer from "../components/Articles/store/articles-reducer";

const homePageReducer = combineReducers({
    brands: brandsReducer,
    articles: articlesReducer,
})

export default homePageReducer;