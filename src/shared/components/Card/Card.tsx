import React from 'react';
import {checkInFavorites} from "../../../components/Pages/shared/utils/checkInFavorites";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectIsLoading} from "../../../components/Pages/components/Favorites/store/selector/favorites-selector";
import {CardPropsType} from "./types/card.types";
import {AppDispatch} from "../../../app/store/types/store.types";
import {fetchRemoveFromFav} from "../../../components/Pages/components/Favorites/store/thunks/fetchRemoveFromFav";
import {fetchAddToFav} from "../../../components/Pages/components/Favorites/store/thunks/fetchAddToFav";

const Card: React.FC<CardPropsType> = ({classnames, favItems, item, currency}) => {
    const dispatch: AppDispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const onClickToFavorites = () => {
        if (checkInFavorites(item.id, favItems)) {
            dispatch(fetchRemoveFromFav(item.id))
        } else {
            dispatch(fetchAddToFav(item))
        }
    };
    return <div className={classnames + "\ncard"}>
        <div className="card__image">
            <button disabled={isLoading} type={"button"} onClick={() => onClickToFavorites()} className="card__favorite">
                {checkInFavorites(item.id, favItems) ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <img src={item.imageUrl} alt="CarImage" />
        </div>
        <div className="card__info">
            <h4 className="card__name">{item.name}</h4>
            <div className="card__description">{item.description}</div>
            <div className="card__bottom">
                <div className="card__price">{Object.values(item.price)[currency]}</div>
                <div className="card__discount">{item.discount}</div>
                <Link to={`/${item.id}`} className="card__details">Details <MdOutlineKeyboardArrowRight /></Link>
            </div>
        </div>
    </div>
}

export default Card;