import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import LinesLink from "../../../../../../../shared/components/links/components/LinesLink/LinesLink";

const ArticlesTop = () => {
    return <div className="articles__top">
        <Title tag={"h2"} classnames={"home-title"} text={"Read our blog"}/>
        <LinesLink/>
    </div>
};

export default ArticlesTop;