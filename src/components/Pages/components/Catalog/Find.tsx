import React from 'react';
import Page from "../../../../shared/components/pages/Page";

import Catalog from "./components/Catalog/Catalog";
import Sidebar from "./components/Sidebar/Sidebar";

const Find = () => {
    return <Page name={"find"} title={"Find cars to fit your criteria"}>
        <div className="find__body">
            <Sidebar/>
            <Catalog/>
        </div>
    </Page>
};

export default Find;