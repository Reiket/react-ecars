import React from 'react';
import {cn} from "../../utils";
import {ImageProps} from "./types/image.types";

const Image: React.FC<ImageProps> = ({name, url, alt, classnames, children}) => {
    return <div className={cn(name ? `${name}__image` : "image")}>
        <img className={cn(classnames)} src={url} alt={alt}/>
        {children}
    </div>
};

export default Image;