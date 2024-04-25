import React from 'react';
import {PAccordionContent} from "../types/accordion.types";

const AccordionContent: React.FC<PAccordionContent> = ({text, isOpen}) => {
    const contentHeight = React.useRef<HTMLParagraphElement | null>(null)
    const accordionStyle = isOpen ? {height: contentHeight.current?.scrollHeight} : {height: 0}
        return   <div style={accordionStyle} className="accordion__content">
        <p ref={contentHeight}
           className={"text"}>{text}</p>
    </div>
};

export default AccordionContent;