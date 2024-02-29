import React from 'react';
import Title from "../../../../../../shared/components/Title/Title";
import {Link, useLocation} from "react-router-dom";

const NotFoundFav: React.FC = () => {
    const location = useLocation();
    console.log(location)
    console.log(document.referrer)
    return <div className="not-found-fav">
        <div className="not-found-fav__body">
            <Title text={"You don't have favorite trips!"} classnames={"not-found-fav__title"}/>
            <p className="not-found-fav__text">Please press the <span>"Back"</span> button and add a car to favorites.
            </p>
            <Link to={"/"} className={"not-found-fav__btn green-button_big green-button"}>Back</Link>
        </div>
    </div>
};

export default NotFoundFav;