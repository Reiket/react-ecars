import React from 'react';
import {WorksItemPropsType} from "./types/works-item.types";
import Text from "../../../../../../../shared/components/Title/Text";
import {Title} from "../../../../../../../shared/components/Title/Title";

const WorksItem: React.FC<WorksItemPropsType> = ({name, text, id}) => {
    return (
        <div className="works__item">
            <p className={"item-title_big  works__number"}>{id}</p>
            <Title tag={"h3"} text={name} classnames={"item-title_big"}/>
            <Text text={text} classnames={"works__text"}/>
        </div>
    );
};

export default WorksItem;