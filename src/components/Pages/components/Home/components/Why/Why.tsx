import React from 'react';
import PageSection from "../../../../../../shared/components/Section/PageSection";
import Image from "../../../../../../shared/components/Image/Image";
import WhyContent from "./components/WhyContent";

const Why: React.FC = () => {
    return <PageSection name={"why"} classnames={"section-home-page"}>
        <div className="why__body">
            <Image url={"assets/image/why/01.png"} name={"why"} alt={"whyImage"}/>
            <WhyContent/>
        </div>
    </PageSection>
};

export default Why;