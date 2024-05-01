import React from 'react';
import RouterLink from "../../../../../../shared/components/links/RouterLink";
import {footerCopyLinks} from "../../utils/footer-utils";

const FooterCopy: React.FC = () => (
    <div className="footer__copy copy">
        <p className="copy__text">eCars © 2024. All rights reserved.</p>
        {footerCopyLinks.map((link, id) => <RouterLink key={id} url={link.url} classnames={"copy__item"}>
            {link.text}
        </RouterLink>)}
    </div>
);

export default FooterCopy;