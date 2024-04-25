import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import {aboutText} from "../../utils/about-text";
import {Title} from "../../../../../../shared/components/Title/Title";
import Section from "../../../../../../shared/components/Section/Section";

const AboutInfo: React.FC = () => {
    return <Section name={"about-info"} classnames={"about-section"}>
        <Title tag={"h1"} text={"About Us"} classnames={"page-title"}/>
        {aboutText.map((item, id) =>
            <Text key={id} classnames={"about-text"} text={item.text}/>)}
    </Section>
};

export default AboutInfo;