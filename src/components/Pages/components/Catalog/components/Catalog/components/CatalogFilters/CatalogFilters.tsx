import React, {FC} from 'react';
import CatalogFiltersButtons from "./components/CatalogFiltersButtons";
import Button from "../../../../../../../../shared/components/buttons/GreenButton/Button";
import {BsFilter} from "react-icons/bs";

const CatalogFilters: FC = () => {
    return <div className={"catalog__filters catalog-filters"}>
        <Button classnames={"catalog__filter"} theme={"gray"}><BsFilter/>Filters</Button>
        <CatalogFiltersButtons />
    </div>
};

export default CatalogFilters;