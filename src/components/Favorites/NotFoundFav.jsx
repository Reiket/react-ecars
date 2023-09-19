import React from 'react';
import {Link} from "react-router-dom";

const NotFoundFav = () => {
    return (
        <div className="not-found-fav">
            <div className="not-found-fav__container">
                <h2 className="not-found-fav__title title">You don't have favorite trips!</h2>
                <div className="not-found-fav__text">Please press the <span>"Back"</span> button and add a car to favorites.</div>
                <Link to={"/"} className={"not-found-fav__btn green-button"}>Back</Link>
            </div>
        </div>
    );
};

export default NotFoundFav;