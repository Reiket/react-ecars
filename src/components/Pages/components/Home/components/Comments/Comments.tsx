import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import CommentsSlider from "./components/CommentsSlider";
import {fetchComments} from "../../../../../../redux/reducers/comments-reducer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../../../redux/store";

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
                        <h2 className="comments__title title">Our happy clients say about us</h2>
                        <div className="comments__navigation">
                            <button className="comments__button slider-button comments__prev"><MdOutlineKeyboardArrowLeft/></button>
                            <button className="comments__button slider-button comments__next"><MdOutlineKeyboardArrowRight/></button>
                        </div>
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