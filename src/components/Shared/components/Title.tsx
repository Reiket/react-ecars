import React from 'react';
import {TitlePropsType} from "./types/shared.types";

const Title: React.FC<TitlePropsType> = ({text, classnames}) => {
    return  <h2 className={classnames ? classnames + "\ntitle" : "title"}>{text}</h2>
}

export default Title;