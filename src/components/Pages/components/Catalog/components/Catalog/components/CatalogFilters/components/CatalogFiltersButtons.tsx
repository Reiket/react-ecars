import React, {FC} from 'react';
import {GrFormClose} from "react-icons/gr";
import Button from "../../../../../../../../../shared/components/buttons/GreenButton/Button";


const CatalogFiltersButtons: FC = () => {
    return <div className={"catalog-filters__buttons"}>
        <Button classnames={"catalog__filter filter-button"} theme={"gray"}>{"SUV"}<GrFormClose/></Button>
        <Button classnames={"catalog__filter filter-button"} theme={"gray"}>{"SUV"}<GrFormClose/></Button>
        <Button classnames={"catalog__filter filter-button"} theme={"gray"}>{"SUV"}<GrFormClose/></Button>
        <Button classnames={"catalog__filter filter-button"} theme={"gray"}>{"SUV"}<GrFormClose/></Button>
    </div>
};

export default CatalogFiltersButtons;