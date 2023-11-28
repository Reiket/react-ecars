import React from 'react';
import {checkInFavorites} from "../../../../utils/checkInFavorites";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {AppDispatch} from "../../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddToFav, fetchRemoveFromFav} from "../../../../redux/reducers/favorites-reducer";
import {Link} from "react-router-dom";
import {selectIsLoading} from "../../../../redux/selectors/favorites-selector";
import {CardPropsType} from "./types/card.types";

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