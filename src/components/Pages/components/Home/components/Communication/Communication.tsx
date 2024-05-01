import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {cn} from "../../../../../../shared/utils";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenContactPopup, selectIsOpenGetPopup} from "../../../../../Layout/store/selectors/layout-selector";
import {actions} from "../../../../../Layout/store/actions/layout-actios";
import {Title} from "../../../../../../shared/components/Title/Title";
import {communicationItems} from "./utils/communication-utils";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import CommunicationItem from "./components/CommunicationItem";


const Communication: React.FC = () => {

    return <PageSection name={"communication"} classnames={"section-home-page"}>
        <div className="communication__body">
            {communicationItems.map((item, id) => {
                const isContactText = item.btnText === "Contact Us"
                return <CommunicationItem key={id} isContactText={isContactText} {...item}/>
            })}
        </div>
    </PageSection>
};

export default Communication;