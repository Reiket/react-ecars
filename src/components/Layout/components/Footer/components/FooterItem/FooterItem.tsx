import React from 'react';
import {FooterItemsLogo} from "../../types/footer.types";
import FooterItemLogo from "./components/FooterItemLogo";
import FooterItemCompany from "./components/FooterItemCompany";


const FooterItem: React.FC<Partial<FooterItemsLogo>> = ({isLogo, links, title}) => {
    return isLogo ? <FooterItemLogo/> : <FooterItemCompany links={links} title={title} />
};

export default FooterItem;