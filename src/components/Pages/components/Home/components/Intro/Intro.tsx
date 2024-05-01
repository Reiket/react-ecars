import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import IntroContacts from "./components/IntroContacts";

const Intro: React.FC = () => {
    return  <PageSection name={"intro"}>
        <div className="intro__body">
            <Title tag={"h1"} classnames={"main-title"}
                   text={"Car import services with delivery to your doorstep."}/>
            <IntroContacts/>
        </div>
    </PageSection>
};

export default Intro;