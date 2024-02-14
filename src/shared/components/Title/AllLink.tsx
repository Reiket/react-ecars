import React from 'react';
import {TPropsLink} from "./types/title.types";
import {cn} from "../../utils";
import {Link} from "react-router-dom";

const AllLink: React.FC<TPropsLink> = ({text, classnames, link, children}) => {
    return  <Link className={cn("all", classnames)} to={link}>
        {text}
        {children}
    </Link>
}


export default AllLink;