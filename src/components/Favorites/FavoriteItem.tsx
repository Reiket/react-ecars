import React from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {checkInFavorites} from "../../utils/checkInFavorites";
import {useDispatch} from "react-redux";
import {fetchRemoveFromFav} from "../../redux/reducers/favorites-reducer";
import {AppDispatch} from "../../redux/store";
import {ItemsType} from "../../types/types";
type PropsType = {
    favItems: Array<ItemsType>
    item: ItemsType
    currency: number
}
const FavoriteItem: React.FC<PropsType> = ({favItems, item, currency}) => {

    const dispatch: AppDispatch = useDispatch();
    const onClickToFavorites = () => {
        if (checkInFavorites(item.id, favItems)) {
            dispatch(fetchRemoveFromFav(item.id))
        }
    }
    return (
        <div className="favorites__item item-favorites">
            <div className="item-offers__image">
                <button onClick={onClickToFavorites} className="item-offers__favorite">{checkInFavorites(item.id, favItems) ? <AiFillHeart /> : <AiOutlineHeart />}</button>
                <img src={item.imageUrl} alt="Car"/>
            </div>
            <div className="item-offers__info">
                <h4 className="item-offers__name">{item.name}</h4>
                <div className="item-offers__description">{item.description}</div>
                <div className="item-offers__bottom">
                    <div className="item-offers__price">{Object.values(item.price)[currency]}</div>
                    <div className="item-offers__discount">{item.discount}</div>
                    <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItem;