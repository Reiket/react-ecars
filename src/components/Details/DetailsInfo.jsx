import React from 'react';
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {AiOutlineShareAlt} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";
import {BiDownload, BiSolidEnvelope} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";

const DetailsInfo = () => {
    return (
        <div className="details__info info-details">
            <div className="info-details__sell sell-details">
                <div className="sell-details__top">
                    <div className="sell-details__possibility">
                        <a href={"/"} className="sell-details__item"><MdOutlineFavoriteBorder/>Save</a>
                        <a href={"/"} className="sell-details__item"><AiOutlineShareAlt/>Share</a>
                    </div>
                    <h3 className="sell-details__title">Toyota Land Cruiser 2017 ZX-G Frontier Face-Lifted Petrol 4.6L Sunroof 4WD</h3>
                    <div className="sell-details__price">$45,995</div>
                    <ul className="sell-details__list">
                        <li className="sell-details__property">
                            <h5 className="sell-details__name">Year</h5>
                            <div className="sell-details__text">2017</div>
                        </li>
                        <li className="sell-details__property">
                            <h5 className="sell-details__name">Kilometers</h5>
                            <div className="sell-details__text">15,000</div>
                        </li>
                        <li className="sell-details__property">
                            <h5 className="sell-details__name">Location</h5>
                            <div className="sell-details__text">Dubai</div>
                        </li>
                        <li className="sell-details__property">
                            <h5 className="sell-details__name">Export status</h5>
                            <div className="sell-details__text">Can be exported</div>
                        </li>
                    </ul>
                </div>
                <div className="sell-details__bottom bottom-sell">
                    <h5 className="bottom-sell__title">Interested in this car or want a personalized offer of the best deals?</h5>
                    <div className="bottom-sell__text">Contact us and our manager will give you all the information you need.</div>
                    <a href={"/"} className="bottom-sell__button green-button green-button_big">Check availability</a>
                    <div className="bottom-sell__contacts">
                        <a href={"tel:+971 55 811 9024"} className="bottom-sell__link"><IoLogoWhatsapp/>+971 55 811 9024</a>
                        <a href={"request@example.com"} className="bottom-sell__link"><BiSolidEnvelope/>request@example.com</a>
                    </div>
                </div>
            </div>
            <div className="info-details__inspection inspection-details">
                <div className="inspection-details__top">
                    <h3 className="inspection-details__title">Vehicle inspection</h3>
                    <div className="inspection-details__check"><BsCheck/> Inspected</div>
                </div>
                <ul className="inspection-details__list">
                    <li className="inspection-details__item">
                        <h4 className="inspection-details__name">Accidents or damage</h4>
                        <div className="inspection-details__text">None reported</div>
                    </li>
                    <li className="inspection-details__item">
                        <h4 className="inspection-details__name">Mileage comparison</h4>
                        <div className="inspection-details__text">15,000 km</div>
                    </li>
                    <li className="inspection-details__item">
                        <h4 className="inspection-details__name">1-owner vehicle</h4>
                        <div className="inspection-details__text">Yes</div>
                    </li>
                    <li className="inspection-details__item">
                        <h4 className="inspection-details__name">Basic maintenance</h4>
                        <div className="inspection-details__text">Passed</div>
                    </li>
                </ul>
                <a href={"/"} className="inspection-details__link"><BiDownload/> Download the basic report</a>
                <h4 className="inspection-details__full">Full Inspection</h4>
                <div className="inspection-details__text">A complete inspection and history check. In addition, we send you lots of photos and videos of the car to help you make that important purchase.</div>
                <a href="/" className="inspection-details__button green-button green-button_big">Book a full inspection</a>
                <a href="/" className="inspection-details__more all">Learn more about the full inspection</a>
            </div>
            <div className="info-details__date">Added: Jan 6, 2023 • Views: 38</div>
        </div>
    );
};

export default DetailsInfo;