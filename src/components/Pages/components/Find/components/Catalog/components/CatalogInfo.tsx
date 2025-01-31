import React, { FC, useState } from "react";
import DropdownMenu from "src/shared/components/menu/DropdownMenu/DropdownMenu";
import { catalogItems } from "../utils/catalog-utils";
import { BiSolidDownArrow } from "react-icons/bi";
import Text from "src/shared/components/Title/Text";
import { useAppSelector } from "src/app/store/hooks";
import { totalCarsCountSelector } from "../../../store/selectors/find-selectors";
import AnimatedCounter from "src/shared/components/AnimatedCounter/AnimatedCounter";

const CatalogInfo: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalCardsCount = useAppSelector(totalCarsCountSelector);

  const handleOnClickMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="catalog__info">
      <Text classnames={"catalog__amount"}>
        <span>
          <AnimatedCounter count={totalCardsCount} />
          found
        </span>
      </Text>
      <DropdownMenu
        name={"Sort by:"}
        isOpen={isMenuOpen}
        onClick={handleOnClickMenu}
        listItems={catalogItems}
        category="Newly added"
        arrowElement={<BiSolidDownArrow />}
      />
    </div>
  );
};

export default CatalogInfo;
