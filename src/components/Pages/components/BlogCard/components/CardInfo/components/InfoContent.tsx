import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import Text from "../../../../../../../shared/components/Title/Text";
import {PInfoContent} from "../types/card-info.types";

const InfoContent: React.FC<PInfoContent> = ({content}) => {
    return <div className={"card-info__content"}>
        {content!.map((item, id) => <div key={id} className="card-info__description">
            <Title tag={"h2"} classnames={"page-block-title"} text={item.title}/>
            <Text text={item.text}/>
        </div>)}
    </div>
};

export default InfoContent;