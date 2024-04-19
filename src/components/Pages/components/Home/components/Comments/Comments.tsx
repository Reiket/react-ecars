import React from 'react';
import CommentsSlider from "./components/CommentsSlider/CommentsSlider";
import {useDispatch} from "react-redux";
import NavigationBtn from "../../../../../../shared/components/buttons/NavigationBtn/NavigationBtn";
import {AppDispatch} from "../../../../../../app/store/types/store.types";
import {fetchComments} from "./store/thunks/fetchComments";
import {Title} from "../../../../../../shared/components/Title/Title";

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
                        <Title tag={"h2"} classnames={"home-title"} text={"Our happy clients say about us"}/>
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