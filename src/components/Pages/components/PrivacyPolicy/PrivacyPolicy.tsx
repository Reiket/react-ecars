import React from 'react';
import {Title} from "../../../../shared/components/Title/Title";
import Text from "../../../../shared/components/Title/Text";
import {privacy} from "./utils/privacy";
import PageSection from "../../../../shared/components/Section/PageSection";

const PrivacyPolicy = () => {
    return <PageSection name={"privacy"} classnames={"section-text"}>
        <Title tag={"h1"} classnames={"page-title"} text={"Privacy Policy"}/>
        <Text classnames={"section-text__text"} text={`Effective Date: 22.04.2024`}/>
        {privacy.map((item, id) =>
            <>
                <Title key={id} tag={"h2"} classnames={"page-block-title"} text={item.title}/>
                <Text text={item.text} classnames={"section-text__text"}/>
            </>)}
    </PageSection>
};

export default PrivacyPolicy;