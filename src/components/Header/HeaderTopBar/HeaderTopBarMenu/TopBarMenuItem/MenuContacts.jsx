import React from 'react';
import {BiLogoFacebook} from "react-icons/bi";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";

const MenuContacts = () => {
    return (
        <>
            <li className="header-contacts__item">
                <a href="https://www.facebook.com/" className="header-contacts__link"><BiLogoFacebook /></a>
            </li>
            <li className="header-contacts__item">
                <a href="https://twitter.com/" className="header-contacts__link"><AiOutlineTwitter/></a>
            </li>
            <li className="header-contacts__item">
                <a href="https://www.youtube.com/" className="header-contacts__link"><AiFillYoutube/></a>
            </li>
            <li className="header-contacts__item">
                <a href="https://www.instagram.com/" className="header-contacts__link"><AiFillInstagram/></a>
            </li>
        </>
    );
};

export default MenuContacts;