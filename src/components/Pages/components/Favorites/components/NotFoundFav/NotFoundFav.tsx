import React from 'react';
import {Link} from "react-router-dom";
import {Title} from "../../../../../../shared/components/Title/Title";

const NotFoundFav: React.FC = () => {
    return <div className="not-found-fav">
        <div className="not-found-fav__body">
            <Title tag={"h2"} text={"You don't have favorite trips!"} classnames={"not-found-fav__title page-block-title"}/>
            <p className="not-found-fav__text">Please press the <span>"Back"</span> button and add a car to favorites.
            </p>
            <Link to={"/"} className={"not-found-fav__btn green-button_big green-button"}>Back</Link>
        </div>
    </div>
};

export default NotFoundFav;