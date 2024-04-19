import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import Section from "../../../../../../shared/components/Section/Section";
import ShareCopy from "./components/ShareCopy";
import ShareContacts from "./components/ShareContacts";

const CardShare: React.FC = () => {

    return <Section name={"card-share"} classnames={"blog-card__section"}>
        <ul className="card-share__list">
            <Title tag={"h5"} text={"Share:"}/>
            <ShareContacts/>
            <ShareCopy/>
        </ul>
    </Section>
};

export default CardShare;