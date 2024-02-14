import React from 'react';
import {WorksItemPropsType} from "./types/works-item.types";
import Text from "../../../../../../../shared/components/Title/Text";
import ItemTitle from "../../../../../../../shared/components/Title/ItemTitle";

const WorksItem: React.FC<WorksItemPropsType> = ({name, text, id}) => {
    return (
        <div className="works__item">
            <ItemTitle size={"big"} text={id.toString()} classnames={"works__number"}/>
            <ItemTitle size={"big"} text={name} classnames={"works__name"}/>
            <Text text={text} classnames={"works__text"}/>
        </div>
    );
};

export default WorksItem;