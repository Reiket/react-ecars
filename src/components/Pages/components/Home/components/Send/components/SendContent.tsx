import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import Text from "../../../../../../../shared/components/Title/Text";

const SendContent = () => {
    return <div className="send__content">
        <Title tag={"h3"}
               text={"Send an inquiry now and get the best offers suitable for your requirements"}
               classnames={"send__title block-title"}/>
        <Text
            text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
    </div>
};

export default SendContent;