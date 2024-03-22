import React from 'react';
import {Title} from "../../../../shared/components/Title/Title";
import Text from "../../../../shared/components/Title/Text";
import {privacy} from "./utils/privacy";

const PrivacyPolicy = () => {
    return <section className={"section__privacy privacy section-text"}>
        <div className="privacy__container">
            <Title tag={"h1"} classnames={"page-title"} text={"Privacy Policy"}/>
            <Text classnames={"section-text__text"} text={`Effective Date: 22.04.2024`}/>
            {privacy.map((item, id) =>
                <>
                    <Title key={id} tag={"h2"} classnames={"page-block-title"} text={item.title}/>
                    <Text text={item.text} classnames={"section-text__text"}/>
            </>)}
        </div>
    </section>
};

export default PrivacyPolicy;