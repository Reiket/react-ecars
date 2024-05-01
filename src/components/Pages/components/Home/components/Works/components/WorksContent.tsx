import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import Text from "../../../../../../../shared/components/Title/Text";

const WorksContent = () => {
    return  <div className="works__top">
        <Title tag={"h2"} text={"How it works"} classnames={"home-title"}/>
        <Text classnames={"works__text works__text_width"}
              text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."}/>
    </div>
};

export default WorksContent;