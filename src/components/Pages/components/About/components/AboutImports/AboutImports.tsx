import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import Text from "../../../../../../shared/components/Title/Text";
import {importsText} from "../../utils/about-text";
import Section from "../../../../../../shared/components/Section/Section";

const AboutImports = () => {
    return <Section name={"imports-about"} classnames={"about-section"}>
        <Title tag={"h3"} classnames={"page-block-title"} text={"Car imports: a full package of services"}/>
        <Text text={importsText}/>
    </Section>
};

export default AboutImports;