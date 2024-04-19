import React from 'react';
import {cn} from "../../utils";
import {IPSection} from "./types/section.types";

const Section: React.FC<IPSection> = ({name, children, classnames}) => {
    return <section className={cn(`section__${name}`, classnames, name, )}>
           {children}
    </section>
};

export default Section;