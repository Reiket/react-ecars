import React from 'react';
import AboutInfo from "./components/AboutInfo/AboutInfo";
import AboutBenefits from "./components/AboutBenefits/AboutBenefits";
import AboutMission from "./components/AboutMission/AboutMission";
import AboutContacts from "./components/AboutContacts/AboutContacts";
import AboutSend from "./components/AboutSend/AboutSend";
import AboutImports from "./components/AboutImports/AboutImports";
import Container from "../../../../shared/components/Container/Container";

const About: React.FC = () => {
    return <div className="about">
        <Container classnames={"about"}>
            <div className="about__body">
                <AboutInfo/>
                <AboutBenefits/>
                <AboutMission/>
                <AboutContacts/>
                <AboutImports/>
                <AboutSend/>
            </div>
        </Container>
    </div>
};

export default About;