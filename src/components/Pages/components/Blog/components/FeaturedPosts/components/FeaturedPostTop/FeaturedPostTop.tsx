import React from 'react';
import {Title} from "../../../../../../../../shared/components/Title/Title";
import NavigationBtn from "../../../../../../../../shared/components/buttons/NavigationBtn/NavigationBtn";

const FeaturedPostTop = () => {
    return  <div className="featured-posts__top">
        <Title tag={"h3"} classnames={"block-title"} text={"Featured posts"}/>
        <NavigationBtn classnames={"featured-posts"}/>
    </div>
};

export default FeaturedPostTop;