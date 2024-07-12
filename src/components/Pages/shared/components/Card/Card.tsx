import { FC, memo } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CardProps } from "./types/card.types";
import { useAppSelector } from "src/app/store/hooks";
import { selectFilters } from "../../../components/Home/components/Offers/store/selector/offers-selector";
import { Title } from "src/shared/components/Title/Title";
import { cn, userLanguage } from "src/shared/utils";

import Text from "src/shared/components/Title/Text";
import FavButton from "src/shared/components/buttons/FavButton/FavButton";
import Image from "src/shared/components/Image/Image";
import LinkWithIcon from "src/shared/components/links/components/LinkWithIcon/LinkWithIcon";
import { usePrice } from "src/shared/hooks/usePrice";
import { CarType } from "src/app/api/types/cars.types";

const Card: FC<CardProps> = memo(({ item, currency, cardType }) => {
  const [price, discountedPrice] = usePrice(item, currency);
  const isCatalog = cardType === "row";
  const imageUrl =
    item.attributes.imageUrl?.data[0]?.attributes?.formats?.medium?.url || "";
  const { year, make, model, fuel, type, kilometers, location } =
    item.attributes.properties;
  const nameCard = `${year} ${make} ${model}`;
  const paramsCard = `${location} • ${type} • ${userLanguage(kilometers)} km • ${fuel}`;
  const filters = useAppSelector(selectFilters);
  const renderFavButton = (isCatalog: boolean, item: CarType) => {
    if (isCatalog) {
      return <FavButton item={item} />;
    }
    return null;
  };
  return (
    <div className={cn("card", cardType)}>
      <Image url={imageUrl} name={"card"} alt={"CardImage"}>
        {renderFavButton(isCatalog, item)}
        {item.attributes.isPremium && <span>Premium</span>}
      </Image>
      <div className="card__info">
        <Text text={nameCard} classnames={"card__name"}>
          {renderFavButton(isCatalog, item)}
        </Text>
        <p className="card__params">{paramsCard}</p>
        {!!item.attributes.description && (
          <p className="card__description">{item.attributes.description}</p>
        )}
        <div className="card__bottom">
          <Title
            text={discountedPrice}
            tag={"h3"}
            classnames={"item-title_small card__title"}
          />
          {item.attributes.isSpecialOffer && (
            <p className="card__discount">{price}</p>
          )}
          <LinkWithIcon
            url={`/${item.id}?ship=${filters.shipNumber}&currency=${filters.currency}`}
          >
            Details <MdOutlineKeyboardArrowRight />
          </LinkWithIcon>
        </div>
      </div>
    </div>
  );
});

export default Card;
