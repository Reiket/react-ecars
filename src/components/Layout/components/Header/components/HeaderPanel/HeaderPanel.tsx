import React from 'react';
import PageSection from "../../../../../../shared/components/Section/PageSection";
import PanelContacts from "./components/PanelContacts/PanelContacts";
import PanelMenu from "./components/PanelMenu/PanelMenu";

const HeaderPanel: React.FC = () => {
    return (
        <PageSection name={"header-panel"}>
            <div className="header-panel__body">
                <PanelContacts/>
                <PanelMenu/>
            </div>
        </PageSection>
    );
};

export default HeaderPanel;