import {newsAPI} from "../../api/api";

const GET_NEWS = "GET_NEWS";

let initialState = {
    posts: [],
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                posts: action.posts,
            }
        default : {
            return state;
        }
    }
}

const setNews = (posts) => ({type: GET_NEWS, posts});

export const fetchNews = () => {
    return async (dispatch) => {
        try {
            let {data} = await newsAPI.getNewsPosts();
            dispatch(setNews(data));
        } catch (error) {
            console.log("Error:" + error);
            //alert("Something went wrong! Please, try again!")
        }
    }
}


export default newsReducer;