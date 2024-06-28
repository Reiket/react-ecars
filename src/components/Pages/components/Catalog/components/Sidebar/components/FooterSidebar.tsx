import React from 'react';
import Button from "../../../../../../../shared/components/buttons/GreenButton/Button";
import {footerSidebarUtils} from "../utils/sidebar-utils";

const FooterSidebar = () => {
    return  <div className={"sidebar__footer footer-sidebar"}>
        {footerSidebarUtils.map((item, i) => (
            <Button key={i} type={item.type} onClick={() => {}} theme={item.theme}>{item.text}</Button>
        ))}
    </div>
};

export default FooterSidebar;