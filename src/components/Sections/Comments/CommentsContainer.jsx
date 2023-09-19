import React from 'react';
import {selectComments} from "../../../redux/selectors/comments-selector";
import {connect} from "react-redux";
import {fetchComments} from "../../../redux/reducers/comments-reducer";
import Comments from "./Comments";


const CommentsContainer = ({comments, fetchComments}) => {
    React.useEffect(() => {
        fetchComments()
    }, [])
    return (
        <Comments items={comments}/>
    );
};

let mapStateToProps = (state) => ({
    comments: selectComments(state),
})

export default connect(mapStateToProps, {fetchComments})(CommentsContainer);