import React from 'react';
import {cn} from "../../utils";
import {IPImage} from "./types/image.types";
const Image: React.FC<IPImage> = ({name, url, alt, classnames}) => {
    return <div className={cn(name ? `${name}__image` : "image")}>
        <img className={cn(classnames)} src={url} alt={alt}/>
    </div>
};

export default Image;