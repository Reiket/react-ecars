import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-router-dom";
import {CardProps} from "./types/card.types";
import Text from "../../../../../shared/components/Title/Text";
import FavButton from "../../../../../shared/components/buttons/FavButton/FavButton";
import {usePrice} from "../../../../../shared/hooks/usePrice";
import {useAppSelector} from "../../../../../app/store/hooks";
import {
    selectFilters
} from "../../../components/Home/components/Offers/store/selector/offers-selector";
import {Title} from "../../../../../shared/components/Title/Title";
import Image from "../../../../../shared/components/Image/Image";

const Card: React.FC<CardProps> = React.memo(({item, currency, classnames,isCatalog}) => {
    const [price, discountedPrice] = usePrice(item, currency)
    const filters = useAppSelector(selectFilters);
    return <div className={classnames}>
        <Image url={item.imageUrl} name={"card"} alt={"CardImage"}>
            {!isCatalog && (
                <FavButton item={item}/>
            )}
        </Image>
        <div className="card__info">
            <Text text={item.name} classnames={"card__name"}>
                {isCatalog && (
                    <FavButton item={item} classnames={"catalog-card-fav-button"}/>
                )}
            </Text>
            <p className="card__params">{item.params}</p>
            {!!item.description && (
                <p className="card__description">{item.description}</p>
            )}
            <div className="card__bottom">
                <Title text={discountedPrice} tag={"h3"} classnames={"item-title_small card__title"}/>
                <p className="card__discount">{price}</p>
                <Link to={`/${item.id}?ship=${filters.shipNumber}&currency=${filters.currency}`} className="card__details icon-link">Details <MdOutlineKeyboardArrowRight /></Link>
            </div>
        </div>
    </div>
})

export default Card;