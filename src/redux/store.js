import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import offersReducer from "./reducers/offers-reducer";
import carsReducer from "./reducers/cars-reducer";
import commentsReducer from "./reducers/comments-reducer";
import newsReducer from "./reducers/news-reducer";
import favoritesReducer from "./reducers/favorites-reducer";
let reducers = combineReducers({
    offers: offersReducer,
    cars: carsReducer,
    comments: commentsReducer,
    news: newsReducer,
    favorites: favoritesReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;