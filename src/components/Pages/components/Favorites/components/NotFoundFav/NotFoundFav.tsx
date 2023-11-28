import React from 'react';
import {Link} from "react-router-dom";
import Title from "../../../../../Shared/components/Title";

const NotFoundFav: React.FC = () => {
    return (
        <div className="not-found-fav">
            <div className="not-found-fav__container">
                <Title text={"You don't have favorite trips!"} classnames={"not-found-fav__title"}/>
                <div className="not-found-fav__text">Please press the <span>"Back"</span> button and add a car to favorites.</div>
                <Link to={"/"} className={"not-found-fav__btn green-button"}>Back</Link>
            </div>
        </div>
    );
};

export default NotFoundFav;