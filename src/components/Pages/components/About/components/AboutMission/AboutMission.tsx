import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import Text from "../../../../../../shared/components/Title/Text";
import {missionText} from "../../utils/about-text";
import Section from "../../../../../../shared/components/Section/Section";
import Image from "../../../../../../shared/components/Image/Image";

const AboutMission: React.FC = () => {
    return  <Section name={"mission-about"} classnames={"about-section"}>
        <div className="mission-about__body">
            <div className="mission-about__item">
                <Title tag={"h3"} classnames={"page-block-title"} text={"Our mission"}/>
                {missionText.map((item, id) =>
                    <Text key={id} classnames={"about-text"} text={item.text}/>)}
            </div>
            <Image name={"mission-about"} url={"/assets/image/pages/about/image.png"} alt="MissionImage"/>
        </div>
    </Section>
};

export default AboutMission;