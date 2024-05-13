import React, {FC} from 'react';
import {GrFormClose} from "react-icons/gr";

interface CatalogFilterBtnProps {
    filterText: string;
}

const CatalogFilterBtn: FC<CatalogFilterBtnProps> = ({filterText}) => {
    return <button className="catalog-button">{filterText} <GrFormClose/></button>
};

export default CatalogFilterBtn;