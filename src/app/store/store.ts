import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import offersReducer from "../../components/Pages/components/Home/components/Offers/store/offers-reducer";
import commentsReducer from "../../components/Pages/components/Home/components/Comments/store/comments-reducer";
import newsReducer from "../../components/Pages/components/Home/components/Blog/store/news-reducer";
import favoritesReducer from "../../components/Pages/components/Favorites/store/favorites-reducer";
import brandsReducer from "../../components/Pages/components/Home/components/Brands/store/brands-reducer";

export let rootReducers = combineReducers({
    offers: offersReducer,
    brands: brandsReducer,
    comments: commentsReducer,
    news: newsReducer,
    favorites: favoritesReducer,
})

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;