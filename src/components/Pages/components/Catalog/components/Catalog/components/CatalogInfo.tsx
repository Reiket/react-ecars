import React, {FC} from 'react';
import DropdownMenu from "../../../../../../../shared/components/menu/DropdownMenu/DropdownMenu";
import {catalogItems} from "../utils/catalog-utils";
import {BiSolidDownArrow} from "react-icons/bi";
import Text from "../../../../../../../shared/components/Title/Text";

const CatalogInfo: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleOnClickMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }
    return <div className="catalog__info">
        <Text classnames={"catalog__amount"}><span>2743</span>found</Text>
        <DropdownMenu name={"Sort by:"} isOpen={isMenuOpen} onClick={handleOnClickMenu} listItems={catalogItems}
                      category={"Newly added"} arrowElement={<BiSolidDownArrow/>}/>
    </div>
};

export default CatalogInfo;