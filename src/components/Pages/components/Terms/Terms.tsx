import React from 'react';
import {Title} from "../../../../shared/components/Title/Title";
import {terms} from "./utils/terms";
import Text from "../../../../shared/components/Title/Text";
import PageSection from "../../../../shared/components/Section/PageSection";

const Terms = () => {
    return  <PageSection name={"terms"} classnames={"section-text"}>
        {terms.map((item, id) =>
            <>
                <Title key={id} tag={"h2"} classnames={"page-block-title"} text={item.title}/>
                <Text text={item.text} classnames={"section-text__text"}/>
            </>)}
    </PageSection>
};

export default Terms;