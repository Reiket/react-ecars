import React, {useState} from 'react';
import Page from "../../../../shared/components/pages/Page";
import Catalog from "./components/Catalog/Catalog";
import Sidebar from "./components/Sidebar/Sidebar";
import {bodyOverflow} from "../../../../shared/utils";
import {useClickOutside} from "../../../../shared/hooks/useClickOutside";

const Find = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ref = React.useRef<HTMLDivElement | null>(null);
    const onClickToSidebar = () => {
        setIsSidebarOpen(prev => !prev)
        bodyOverflow(!isSidebarOpen)
        if (ref.current) {
            ref.current.focus();
        }
    }
    const onClickOutside = () => {
        setIsSidebarOpen(false);
        bodyOverflow(false);
    }
    useClickOutside(ref, onClickOutside)
    return <Page name={"find"} title={"Find cars to fit your criteria"}>
        <div className="find__body">
            <Sidebar isOpen={isSidebarOpen} onClick={onClickOutside} ref={ref}/>
            <Catalog onClick={onClickToSidebar}/>
        </div>
    </Page>
};

export default Find;