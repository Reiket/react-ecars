import React from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {checkInFavorites} from "../../utils/checkInFavorites";

const FavoriteItem = (props) => {

    const onClickToFavorites = () => {
        if (checkInFavorites(props.id, props.items)) {
            props.fetchRemoveFromFav(props.id)
        }
    }
    return (
        <div className="favorites__item item-favorites">
            <div className="item-offers__image">
                <button onClick={onClickToFavorites} className="item-offers__favorite">{checkInFavorites(props.id, props.items) ? <AiFillHeart /> : <AiOutlineHeart />}</button>
                <img src={props.imageUrl} alt="Car"/>
            </div>
            <div className="item-offers__info">
                <h4 className="item-offers__name">{props.name}</h4>
                <div className="item-offers__description">{props.description}</div>
                <div className="item-offers__bottom">
                    <div className="item-offers__price">{Object.values(props.price)[props.currency]}</div>
                    <div className="item-offers__discount">{props.discount}</div>
                    <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItem;