import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import AllLink from "../../../../../../../shared/components/Title/AllLink";
import {RiArrowRightLine} from "react-icons/ri";

const ArticlesTop = () => {
    return  <div className="articles__top">
        <Title tag={"h2"} classnames={"home-title"} text={"Read our blog"}/>
        <AllLink text={"All articles"} link={"/blog"} classnames={"articles__all"}>
            <RiArrowRightLine/>
        </AllLink>
    </div>
};

export default ArticlesTop;