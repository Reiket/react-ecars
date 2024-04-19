import React from 'react';
import {cn} from "../../../../../../../../shared/utils";
import {MdKeyboardArrowDown} from "react-icons/md";
import {TPBrandsShow} from "./types/brands-show.types";

const BrandsShow: React.FC<TPBrandsShow> = ({isShowAll, onClickToShowAll}) => {
    return <button onClick={onClickToShowAll} className={cn("all all_show", {
        "all_show_less": isShowAll
    })}>{isShowAll ? "Less" : "Show"} all brands <MdKeyboardArrowDown/></button>
};

export default BrandsShow;