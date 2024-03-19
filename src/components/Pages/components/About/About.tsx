import React from 'react';
import AboutInfo from "./components/AboutInfo/AboutInfo";
import AboutBenefits from "./components/AboutBenefits/AboutBenefits";
import AboutMission from "./components/AboutMission/AboutMission";
import AboutContacts from "./components/AboutContacts/AboutContacts";
import AboutSend from "./components/AboutSend/AboutSend";
import AboutImports from "./components/AboutImports/AboutImports";

const About: React.FC = () => {
    return <section className="section__about about">
        <div className="about__container">
            <div className="about__body">
                <AboutInfo/>
                <AboutBenefits/>
                <AboutMission/>
                <AboutContacts/>
                <AboutImports/>
                <AboutSend/>
            </div>
        </div>
    </section>
};

export default About;