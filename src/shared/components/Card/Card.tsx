import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-router-dom";
import {CardPropsType} from "./types/card.types";
import Text from "../Title/Text";
import ItemTitle from "../Title/ItemTitle";
import FavButton from "../FavButton/FavButton";
import {usePrice} from "../../hooks/usePrice";
import {useAppSelector} from "../../../app/store/hooks";
import {
    selectFilters
} from "../../../components/Pages/components/Home/components/Offers/store/selector/offers-selector";

const Card: React.FC<CardPropsType> = React.memo(({item, currency, classnames}) => {
    const [price, discountedPrice] = usePrice(item, currency)
    const filters = useAppSelector(selectFilters);
    return <div className={classnames}>
        <div className="card__image">
            <FavButton item={item} classnames={"card__favorite"}/>
            <img src={item.imageUrl} alt="CarImage" />
        </div>
        <div className="card__info">
            <Text text={item.name} classnames={"card__name"}/>
            <p className="card__description">{item.description}</p>
            <div className="card__bottom">
                <ItemTitle text={discountedPrice} size={"small"}/>
                <p className="card__discount">{price}</p>
                <Link to={`/${item.id}?ship=${filters.shipNumber}&currency=${filters.currency}`} className="card__details">Details <MdOutlineKeyboardArrowRight /></Link>
            </div>
        </div>
    </div>
})

export default Card;