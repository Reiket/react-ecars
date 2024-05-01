import React from 'react';
import WorksItem from "./components/WorksItem";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import WorksContent from "./components/WorksContent";
import {worksItems} from "./utils/works-utils";

const Works: React.FC = () => {
    return (
        <PageSection name={"works"} classnames={"section-home-page"}>
            <div className="works__body">
                <WorksContent/>
                <div className="works__inner">
                    {worksItems.map((item) => <WorksItem key={item.id} {...item}/>)}
                </div>
            </div>
        </PageSection>
    );
};

export default Works;