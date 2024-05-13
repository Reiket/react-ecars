import React, {FC} from 'react';
import {BsFilter} from "react-icons/bs";
import {BiSolidDownArrow} from "react-icons/bi";
import DropdownMenu from "../../../../../../shared/components/menu/DropdownMenu/DropdownMenu";
import {catalogItems} from "./utils/catalog-utils";

const Catalog: FC = () => {
    return <div className="find__catalog catalog">
        <div className="catalog__top">
            <div className="catalog__amout"><span>2743</span>found</div>
            <div className="catalog__sort find-sort">
                <span className={"find-sort__text"}>Sort by:</span>
                <DropdownMenu listItems={catalogItems} category={"Newly added"} arrowElement={<BiSolidDownArrow/>}/>
            </div>
        </div>
        <div className="find-card__filter">
            <button className="find-card__button"><BsFilter/> Filters</button>
        </div>
        {/*<FindCardButtons/>*/}
        {/*<div className="find-card__body">*/}
        {/*    <FindItem/>*/}
        {/*</div>*/}
    </div>
};

export default Catalog;