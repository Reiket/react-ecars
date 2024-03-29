import React from 'react';
import WorksItem from "./components/WorksItem";
import {worksItems} from "./types/works.types";
import Text from "../../../../../../shared/components/Title/Text";
import {Title} from "../../../../../../shared/components/Title/Title";

const Works: React.FC = () => {
    return (
        <section className="section__works works">
            <div className="works__container">
                <div className="works__body">
                    <div className="works__top">
                        <Title tag={"h2"} text={"How it works"} classnames={"home-title"}/>
                        <Text classnames={"works__text works__text_width"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."}/>
                    </div>
                    <div className="works__inner">
                        {worksItems.map((item) => <WorksItem key={item.id} {...item}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;