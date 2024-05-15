import React, {FC} from 'react';
import CatalogFilters from "./components/CatalogFilters/CatalogFilters";
import CatalogInfo from "./components/CatalogInfo";
import CatalogCards from "./components/CatalogCards";

const Catalog: FC = () => {
    return <div className="find__catalog catalog">
        <CatalogInfo />
        <CatalogFilters/>
        <CatalogCards/>
    </div>
};

export default Catalog;