import React from 'react';
import {communicationItems} from "./utils/communication-utils";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import CommunicationItem from "./components/CommunicationItem";


const Communication: React.FC = () => {

    return <PageSection name={"communication"} classnames={"section-home-page"}>
        <div className="communication__body">
            {communicationItems.map((item, id) => {
                const isContactText = item.btnText === "Contact Us"
                return <CommunicationItem key={id} isContactText={isContactText}{...item}/>
            })}
        </div>
    </PageSection>
};

export default Communication;