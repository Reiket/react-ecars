import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import CommentsSlider from "./components/CommentsSlider";
import {fetchComments} from "../../../../../../redux/reducers/comments-reducer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../../../redux/store";
import NavigationBtn from "../../../../../Shared/components/NavigationBtn";
import Title from "../../../../../Shared/components/Title";

const Comments: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchComments())
    }, [])
    return (
        <section className="section__comments comments">
            <div className="comments__container">
                <div className="comments__body">
                    <div className="comments__top">
                        <Title text={"Our happy clients say about us"}/>
                        <NavigationBtn classnames={"comments"}/>
                    </div>
                    <div className="comments__inner">
                       <CommentsSlider/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comments;