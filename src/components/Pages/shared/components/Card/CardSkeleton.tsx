import React, { FC } from "react";
import { cn } from "src/shared/utils";

interface Props {
  cardType: "row" | "column";
}

const CardSkeleton: FC<Props> = ({ cardType }) => {
  return (
    <div className={cn("card-skeleton", cardType)}>
      <div className="card-skeleton__image"></div>
      <div className="card-skeleton__info">
        <div className="card-skeleton__name"></div>
        <div className="card-skeleton__params"></div>
        <div className="card-skeleton__description"></div>
        <div className="card-skeleton__bottom">
          <div className="card-skeleton__price"></div>
          <div className="card-skeleton__link"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
