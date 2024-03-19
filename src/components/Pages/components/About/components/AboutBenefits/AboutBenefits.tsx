import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import {benefitsText} from "../../utils/about-text";
import {Title} from "../../../../../../shared/components/Title/Title";
import {bottomIntroItems} from "../../../../shared/types/benefints.types";

const AboutBenefits: React.FC = () => {
    return <div className="about__benefits benefits-about">
        <Title classnames={"page-block-title"} tag={"h3"} text={"Benefits"}/>
        {benefitsText.map((item, id) => <Text key={id} classnames={"about-text"} text={item.text}/>)}
        <div className="benefits-about__body">
            {bottomIntroItems.map(item => <div key={item.title} className="benefits-about__item">
                <div className="benefits-about__image benefits-image">
                    <img src={item.imageUrl} alt="ImageIntro"/>
                </div>
                <div className="benefits-about__content">
                    <Title tag={"h3"} classnames={"item-title_small"} text={item.title}/>
                    <div className="benefits-about__text">{item.text}</div>
                </div>
            </div>)}
        </div>
    </div>
};

export default AboutBenefits;