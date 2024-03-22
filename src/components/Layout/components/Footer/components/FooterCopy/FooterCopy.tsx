import React from 'react';
import {Link} from "react-router-dom";

const FooterCopy: React.FC = () => (
    <div className="footer__copy copy">
        <p className="copy__text">eCars © 2024. All rights reserved.</p>
        <Link to={"/privacy"} className="copy__item">Privacy Policy</Link>
        <Link to={"/terms"} className="copy__item">Terms & Conditions</Link>
    </div>
);

export default FooterCopy;