import React, {FC} from 'react';
import CatalogFiltersButtons from "./components/CatalogFiltersButtons";
import Button from "../../../../../../../../shared/components/buttons/GreenButton/Button";
import {BsFilter} from "react-icons/bs";

interface CatalogFiltersProps {
    onClick: () => void
}

const CatalogFilters: FC<CatalogFiltersProps> = ({onClick}) => {
    return <div className={"catalog__filters catalog-filters"}>
        <Button type={"button"} onClick={onClick} classnames={"catalog__filter"} theme={"gray"}><BsFilter/>Filters</Button>
        <CatalogFiltersButtons />
    </div>
};

export default CatalogFilters;