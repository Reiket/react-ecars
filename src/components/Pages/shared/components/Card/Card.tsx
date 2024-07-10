import { FC, memo } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CardProps } from "./types/card.types";
import { useAppSelector } from "src/app/store/hooks";
import { selectFilters } from "../../../components/Home/components/Offers/store/selector/offers-selector";
import { Title } from "src/shared/components/Title/Title";
import { usePrice } from "src/shared/hooks/usePrice";
import { cn, userLanguage } from "src/shared/utils";

import Text from "src/shared/components/Title/Text";
import FavButton from "src/shared/components/buttons/FavButton/FavButton";
import Image from "src/shared/components/Image/Image";
import LinkWithIcon from "src/shared/components/links/components/LinkWithIcon/LinkWithIcon";

const Card: FC<CardProps> = memo(({ item, currency, type }) => {
  const [price, discountedPrice] = usePrice(item, currency);
  const isCatalog = type === "row";
  const { year, make, model, fuel, status, kilometers, location } =
    item.properties;
  const nameCard = `${year} ${make} ${model}`;
  const paramsCard = `${location} • ${status} • ${userLanguage(kilometers)} km • ${fuel}`;
  const filters = useAppSelector(selectFilters);
  return (
    <div className={cn("card", type)}>
      <Image url={item.imageUrl} name={"card"} alt={"CardImage"}>
        {!isCatalog && <FavButton item={item} />}
        {item.isPremium && <span>Premium</span>}
      </Image>
      <div className="card__info">
        <Text text={nameCard} classnames={"card__name"}>
          {isCatalog && <FavButton item={item} />}
        </Text>
        <p className="card__params">{paramsCard}</p>
        {!!item.description && (
          <p className="card__description">{item.description}</p>
        )}
        <div className="card__bottom">
          <Title
            text={discountedPrice}
            tag={"h3"}
            classnames={"item-title_small card__title"}
          />
          {item.isSpecialOffer && <p className="card__discount">{price}</p>}
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
