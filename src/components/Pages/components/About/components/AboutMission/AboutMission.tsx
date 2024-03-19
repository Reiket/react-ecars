import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import Text from "../../../../../../shared/components/Title/Text";
import {missionText} from "../../utils/about-text";

const AboutMission: React.FC = () => {
    return <div className="about__mission mission-about">
        <div className="mission-about__body">
            <div className="mission-about__item">
                <Title tag={"h3"} classnames={"page-block-title"} text={"Our mission"}/>
                {missionText.map((item, id) =>
                    <Text key={id} classnames={"about-text"} text={item.text}/>)}
            </div>
            <div className="mission-about__item">
                <img src="/assets/image/pages/about/image.png" alt="MissionImage"/>
            </div>
        </div>
    </div>
};

export default AboutMission;