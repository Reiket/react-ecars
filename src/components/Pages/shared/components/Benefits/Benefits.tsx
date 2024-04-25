import React from 'react';
import {Title} from "../../../../../shared/components/Title/Title";
import {cn} from "../../../../../shared/utils";
import Image from "../../../../../shared/components/Image/Image";
interface PBenefits {
    imageUrl: string
    title: string
    text: string
    classnames?: string
}
const Benefits: React.FC<PBenefits> = ({imageUrl, title, text, classnames}) => {
    return  <div className={cn("benefits", classnames)}>
        <Image url={imageUrl} alt={"BenefitsImage"} name={"benefits"}/>
        <div className="benefits__content">
            <Title tag={"h3"} text={title} classnames={"item-title_small"}/>
            <p className="benefits__text">{text}</p>
        </div>
    </div>
};

export default Benefits;