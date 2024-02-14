import React from "react";
import {TPropsItemTitle} from "./types/title.types";
import {cn} from "../../utils";

const ItemTitle: React.FC<TPropsItemTitle> = ({text, classnames, size}) => {
    return  <h3 className={cn(`item-title_${size}`, classnames)}>{text}</h3>
}

export default ItemTitle;