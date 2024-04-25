import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import {benefitsText} from "../../utils/about-text";
import {Title} from "../../../../../../shared/components/Title/Title";
import {bottomIntroItems} from "../../../../shared/types/benefints.types";
import Section from "../../../../../../shared/components/Section/Section";
import Benefits from "../../../../shared/components/Benefits/Benefits";

const AboutBenefits: React.FC = () => {
    return  <Section name={"benefits-about"} classnames={"about-section"}>
        <Title classnames={"page-block-title"} tag={"h3"} text={"Benefits"}/>
        {benefitsText.map((item, id) => <Text key={id} classnames={"about-text"} text={item.text}/>)}
        <div className="benefits-about__body">
            {bottomIntroItems.map(item => <Benefits key={item.title} classnames={"benefits-about"} {...item}/>)}
        </div>
    </Section>
};

export default AboutBenefits;