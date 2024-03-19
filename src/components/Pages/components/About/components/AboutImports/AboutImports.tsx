import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import Text from "../../../../../../shared/components/Title/Text";
import {importsText} from "../../utils/about-text";

const AboutImports = () => {
    return  <div className="about__imports imports-about">
        <Title tag={"h3"} classnames={"page-block-title"} text={"Car imports: a full package of services"}/>
        <Text text={importsText}/>
    </div>
};

export default AboutImports;