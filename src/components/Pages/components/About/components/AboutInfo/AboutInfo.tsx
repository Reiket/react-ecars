import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import {aboutText} from "../../utils/about-text";
import {Title} from "../../../../../../shared/components/Title/Title";

const AboutInfo: React.FC = () => {
    return <div className="about__info">
        <Title tag={"h1"} text={"About Us"} classnames={"page-title"}/>
        {aboutText.map((item, id) =>
            <Text key={id} classnames={"about-text"} text={item.text}/>)}
    </div>
};

export default AboutInfo;