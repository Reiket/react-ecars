import React from 'react';
import {Link} from "react-router-dom";
import Title from "../../../../../../shared/components/Title/Title";
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";

const NotFoundFav: React.FC = () => {
    return (
        <div className="not-found-fav">
            <div className="not-found-fav__container">
                <Title text={"You don't have favorite trips!"} classnames={"not-found-fav__title"}/>
                <div className="not-found-fav__text">Please press the <span>"Back"</span> button and add a car to favorites.</div>
                <GreenButton classnames={"not-found-fav__btn"} text={"Back"} type={"link"}/>
            </div>
        </div>
    );
};

export default NotFoundFav;