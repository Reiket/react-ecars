import React from 'react';
import {BiLogoFacebook} from "react-icons/bi";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__body">
                    <div className="footer__item">
                        <a href="/" className="footer__logo">
                            <img src="/assets/image/logo-site/logo.svg" alt="Logo"/>
                        </a>
                        <div className="footer__text">
                            Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis.
                        </div>
                        <ul className="footer__list">
                            <li><a href="/" className="footer__social"><BiLogoFacebook/></a></li>
                            <li><a href="/" className="footer__social"><AiOutlineTwitter/></a></li>
                            <li><a href="/" className="footer__social"><AiFillYoutube/></a></li>
                            <li><a href="/" className="footer__social"><AiFillInstagram/></a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h3 className="footer__title">Company</h3>
                        <ul className="footer__nav nav-footer">
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">About Us</a></li>
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">Blog</a></li>
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h3 className="footer__title">Cars</h3>
                        <ul className="footer__nav nav-footer">
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">Special offers</a></li>
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">New cars</a></li>
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">Used cars</a></li>
                            <li className="nav-footer__item"><a href="/" className="nav-footer__link">Brands</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h3 className="footer__title">Contacts</h3>
                        <ul className="footer__nav nav-footer">
                            <li className="nav-footer__item"><a href="tel:+971 55 811 9024" className="nav-footer__link"><RiWhatsappFill/> +971 55 811 9024</a></li>
                            <li className="nav-footer__item"><a href={"request@example.com"} className="nav-footer__link"><RiMailFill/>request@example.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copy copy">
                    <div className="copy__text">eCars © 2022. All rights reserved.</div>
                    <div className="cpy__item">Privacy Policy</div>
                    <div className="cpy__item">Terms & Conditions</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;