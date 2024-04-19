import React from 'react';
import {Link} from "react-router-dom";
import {IRouterLink} from "./types/link.types";
import {cn} from "../../utils";

const RouterLink: React.FC<IRouterLink> = ({children, classnames, url}) => {
    return <Link to={url} className={cn(classnames)}>
        {children}
    </Link>
};

export default RouterLink;