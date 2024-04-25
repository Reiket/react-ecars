import React from 'react';
import {IoIosArrowDown} from "react-icons/io";
import {PAccordionButton} from "../types/accordion.types";

const AccordionButton: React.FC<PAccordionButton> = ({onClick}) => (
    <button onClick={onClick} className="accordion__button"><IoIosArrowDown/></button>
)

export default AccordionButton;