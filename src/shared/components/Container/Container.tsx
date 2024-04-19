import React from 'react';
import {cn} from "../../utils";
import {IPContainer} from "./types/container.types";

const Container: React.FC<IPContainer> = ({classnames, children}) => {
    return <div className={cn(`${classnames}__container`)}>
        {children}
    </div>
};


export default Container;