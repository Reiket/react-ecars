import {commentsAPI} from "../../api/api";

const GET_COMMENTS = "GET_COMMENTS";

let initialState = {
    comments: [],
    isFetching: false,
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments,
            }
        default : {
            return state;
        }
    }
}


const setComments = (comments) => ({type: GET_COMMENTS, comments});


export const fetchComments = () => {
    return async (dispatch) => {
       try {
           let {data} = await commentsAPI.getComments();
           dispatch(setComments(data));
       } catch (error) {
           console.log("Error:" + error);
           alert("Something went wrong! Please, try again!")
       }
    }
}

export default commentsReducer;