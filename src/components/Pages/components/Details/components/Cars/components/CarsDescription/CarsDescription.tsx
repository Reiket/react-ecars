import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import {CarsDescriptionPropsType} from "./types/cars-description.types";
import Title from "../../../../../../../../shared/components/Title/Title";
import {cn} from "../../../../../../../../shared/utils";

const CarsDescription: React.FC<CarsDescriptionPropsType> = ({detail}) => {
    const [isMoreOpen, setIsMoreOpen] = React.useState(false);
    const onClickToMore = () => {
        setIsMoreOpen(prev => !prev)
    }
    return <div className="cars__description">
        <Title text={"Description"}/>
        <div className="cars__text">
            <p>{detail.name} Electric Leather Seats [RHD Japan Import] Premium Condition.</p>
            <p> ----------------------------------------------------------------------------------------------------------------------</p>
            <p> Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique senectus et. Eget gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum.</p>
            <p> Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh venenatis cras sed.</p>
        </div>
        {isMoreOpen && <div className="cars__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos fugit, inventore minus modi quos ratione. Aut enim illum modi neque nesciunt quasi qui quidem quo repellat rerum. Culpa, quas?</p>
        </div>}
        <button onClick={onClickToMore} className={cn("cars__link all all_show", {
            "all_show_less": isMoreOpen
        })}>{`${isMoreOpen ? "Hide" : ""} More`} <MdKeyboardArrowDown/></button>

    </div>
}

export default CarsDescription;