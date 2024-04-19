import React from 'react';
import SubscribeForm from "./components/SubscribeForm";
import {Title} from "../../../../../../shared/components/Title/Title";
import Section from "../../../../../../shared/components/Section/Section";

const CardSubscribe: React.FC = () => {
    return <Section name={"card-subscribe"} classnames={"blog-card__section"}>
        <Title classnames={"block-title card-subscribe__title"} tag={"h3"} text={"Stay up to date"}/>
        <p className="card-subscribe__text">Don't miss the latest news, reviews and guides from our
            experts. Get updates in your inbox. No spam.
        </p>
        <SubscribeForm/>
    </Section>
};

export default CardSubscribe;