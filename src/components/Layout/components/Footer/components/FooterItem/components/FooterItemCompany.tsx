import React from "react";
import {PFooterItems} from "../../../types/footer.types";
import {Title} from "../../../../../../../shared/components/Title/Title";
import NavFooter from "./NavFooter";

const FooterItemCompany:React.FC<Partial<PFooterItems>> = ({links, title}) => {
    return <div className="footer__item">
        <Title tag={"h3"} text={title as string} classnames={"footer__title item-title_small"}/>
        <NavFooter links={links!}/>
    </div>
}

export default FooterItemCompany;