import React from 'react';
import Title from "../../../../../../shared/components/Title/Title";
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import {Link} from "react-router-dom";

const NotFoundFav: React.FC = () => {
    return (
        <div className="not-found-fav">
            <div className="not-found-fav__body">
                <Title text={"You don't have favorite trips!"} classnames={"not-found-fav__title"}/>
                <p className="not-found-fav__text">Please press the <span>"Back"</span> button and add a car to favorites.</p>
               <Link to={"/"}><GreenButton classnames={"not-found-fav__btn green-button_big"} text={"Back"} type={"link"}/></Link>
            </div>
        </div>
    );
};

export default NotFoundFav;