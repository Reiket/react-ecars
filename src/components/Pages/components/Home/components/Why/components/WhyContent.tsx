import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import Text from "../../../../../../../shared/components/Title/Text";
import {whyParagraph} from "../utils/why-utils";
import AdvantagesWhy from "./AdvantagesWhy";
const WhyContent = () => {
    return <div className="why__content">
        <Title tag={"h2"} text={"Why choose us"} classnames={"home-title"}/>
        <div className="why__paragraphs">
            {whyParagraph.map((p, id) => <Text key={id} text={p.text}/>)}
        </div>
        <AdvantagesWhy/>
    </div>
};

export default WhyContent;