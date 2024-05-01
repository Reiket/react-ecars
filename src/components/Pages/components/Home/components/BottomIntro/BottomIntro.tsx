import React from 'react';
import {bottomIntroItems} from "../../../../shared/types/benefints.types";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import Benefits from "../../../../shared/components/Benefits/Benefits";

const BottomIntro: React.FC = () => {
    return <PageSection name={"bottom-intro"}>
        <div className="bottom-intro__body">
            {bottomIntroItems.map((item, id) => <Benefits classnames={"benefits-intro"} key={id} {...item}/>)}
        </div>
    </PageSection>
};

export default BottomIntro;