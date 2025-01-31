import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import offersReducer from "../../components/Pages/components/Home/components/Offers/store/offers-reducer";
import commentsReducer from "../../components/Pages/components/Home/components/Comments/store/comments-reducer";
import favoritesReducer from "../../components/Pages/components/Favorites/store/favorites-reducer";
import detailsReducer from "../../components/Pages/components/Details/store/details-reducer";
import layoutReducer from "../../components/Layout/store/layout-reducer";
import homePageReducer from "../../components/Pages/components/Home/store/home-store";
import blogCardReducer from "../../components/Pages/components/BlogCard/store/blog-card-reducer";
import findReducer from "../../components/Pages/components/Find/store/find-reducer";
import blogReducer from "../../components/Pages/components/Blog/store/blog-store";

export let rootReducers = combineReducers({
  offers: offersReducer,
  home: homePageReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
  details: detailsReducer,
  layout: layoutReducer,
  blog: blogReducer,

  blogCard: blogCardReducer,
  find: findReducer,
});

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;
