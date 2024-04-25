import React from 'react';
import PageSection from "../../../../shared/components/Section/PageSection";
import {Title} from "../../../../shared/components/Title/Title";
import Container from "../../../../shared/components/Container/Container";
import {faqAccordionContent} from "./utils/faq-accordion-content";
import Accordion from "../../../../shared/components/Accordion/Accordion";

const Faq: React.FC = () => {
    const [accordionActive, setAccordionActive] = React.useState<null | number>(null)
    return <PageSection name={"faq"}>
        <Container classnames={"faq"} size={"small"}>
            <Title text={"Frequently asked questions"} tag={"h1"} classnames={"page-title"}/>
            <div className="faq__body">
                {faqAccordionContent.map((item, id) => {
                    const isOpen = accordionActive === id
                    return <Accordion  onClick={() => (isOpen ? setAccordionActive(null) : setAccordionActive(id))}
                                      isOpen={isOpen} {...item}/>
                })}
            </div>
        </Container>
    </PageSection>
};

export default Faq;