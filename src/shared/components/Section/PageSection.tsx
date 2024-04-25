import React from 'react';
import Section from "./Section";
import Container from "../Container/Container";
import {IPSection} from "./types/section.types";

const PageSection: React.FC<IPSection> = ({children, name, classnames}) => {
    return <Section name={name} classnames={classnames}>
        <Container classnames={name}>
            {children}
        </Container>
    </Section>
};

export default PageSection;