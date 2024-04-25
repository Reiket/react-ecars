import React from 'react';
import {cn} from "../../utils";
import {Title} from "../Title/Title";
import AccordionButton from "./components/AccordionButton";
import AccordionContent from "./components/AccordionContent";
import {PAccordion} from "./types/accordion.types";

const Accordion: React.FC<PAccordion> = ({isOpen, onClick, title, text}) => {
    return <div className={cn("accordion", {
        "active": isOpen
    })}>
        <div className="accordion__label">
            <Title text={title} tag={'h3'} classnames={"item-title_big accordion__title"}/>
            <AccordionButton onClick={onClick}/>
        </div>
       <AccordionContent isOpen={isOpen} text={text}/>
    </div>
};

export default Accordion;