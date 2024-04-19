import React from 'react';
import Section from "./Section";
import Container from "../Container/Container";
import {IPSection} from "./types/section.types";

const PageSection: React.FC<IPSection> = ({children, name}) => {
    return <Section name={name}>
        <Container classnames={name}>
            {children}
        </Container>
    </Section>
};

export default PageSection;