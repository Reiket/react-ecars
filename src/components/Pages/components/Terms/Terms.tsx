import React from 'react';
import {Title} from "../../../../shared/components/Title/Title";
import {terms} from "./utils/terms";
import Text from "../../../../shared/components/Title/Text";

const Terms = () => {
    return <section className={"section__terms terms section-text"}>
        <div className="terms__container">
            {terms.map((item, id) =>
                <>
                    <Title key={id} tag={"h2"} classnames={"page-block-title"} text={item.title}/>
                    <Text text={item.text} classnames={"section-text__text"}/>
                </>)}
        </div>
    </section>
};

export default Terms;