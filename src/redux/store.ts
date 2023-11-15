import {Action, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import offersReducer from "./reducers/offers-reducer";
import carsReducer from "./reducers/cars-reducer";
import commentsReducer from "./reducers/comments-reducer";
import newsReducer from "./reducers/news-reducer";
import favoritesReducer from "./reducers/favorites-reducer";
let rootReducers = combineReducers({
    offers: offersReducer,
    cars: carsReducer,
    comments: commentsReducer,
    news: newsReducer,
    favorites: favoritesReducer,
})

export type InferActionsType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
type rootReducerType = typeof rootReducers
export type AppStateType = ReturnType<rootReducerType>
export type AppDispatch = ThunkDispatch<AppStateType, undefined, Action>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;