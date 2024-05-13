import React, {FC} from 'react';
import CatalogFilters from "./components/CatalogFilters/CatalogFilters";
import CatalogInfo from "./components/CatalogInfo";

const Catalog: FC = () => {
    return <div className="find__catalog catalog">
        <CatalogInfo />
        <CatalogFilters/>
    </div>
};

export default Catalog;