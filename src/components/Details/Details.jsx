import React from 'react';
import ImageGallery from "react-image-gallery";
import {MdKeyboardArrowDown} from "react-icons/md";
import {BsCheck} from "react-icons/bs";
import '../../scss/base/gallery.scss'
import DetailsInfo from "./DetailsInfo";

const Details = () => {
    const [isMoving, setIsMoving] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => {
            setIsMoving(window.innerWidth < 991);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const images = [
        {
            original: '/assets/image/details/01.png',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <section className="section__details details">
            <div className="details__container">
                <div className="details__path">Home Used cars for sale in Dubai Toyota Toyota Land Cruiser</div>
                <div className="details__body">
                    <div className="details__cars cars">
                        <ImageGallery items={images} showIndex={true}/>
                        <a href="/" className={"cars__link all"}>Show all 14 images <MdKeyboardArrowDown/></a>
                        {isMoving && <DetailsInfo/>}
                        <div className="cars__list list-cars">
                            <ul className="list-cars__column">
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Make</h5>
                                    <div className="list-cars__text">Toyota</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Model</h5>
                                    <div className="list-cars__text">Land Cruiser 2017 ZX-G Frontier Face-Lifted Petrol 4.6L Sunroof 4WD</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Year</h5>
                                    <div className="list-cars__text">2017</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Wheels</h5>
                                    <div className="list-cars__text">18´</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Color</h5>
                                    <div className="list-cars__text">White</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Vehicle type</h5>
                                    <div className="list-cars__text">SUV/Crossover</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Kilometers</h5>
                                    <div className="list-cars__text">15,000</div>
                                </li>
                            </ul>
                            <ul className="list-cars__column">
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Gearbox</h5>
                                    <div className="list-cars__text">Automatic</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Fuel</h5>
                                    <div className="list-cars__text">Gasoline</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Seats</h5>
                                    <div className="list-cars__text">8</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Cylinders</h5>
                                    <div className="list-cars__text">8</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Interior</h5>
                                    <div className="list-cars__text">Black</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Location</h5>
                                    <div className="list-cars__text">Dubai</div>
                                </li>
                                <li className="list-cars__item">
                                    <h5 className="list-cars__title">Export status</h5>
                                    <div className="list-cars__text">Can be exported</div>
                                </li>

                            </ul>
                        </div>
                        <div className="cars__description">
                            <h2 className="cars__title title">Description</h2>
                            <div className="cars__text">
                                <p>Toyota Land Cruiser 2017 ZX-G Frontier Face-Lifted Petrol 4.6L Sunroof 4WD AT 7 Electric Leather Seats [RHD Japan Import] Premium Condition.</p>
                                <p> ----------------------------------------------------------------------------------------------------------------------</p>
                                <p> Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique senectus et. Eget gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum.</p>
                                <p> Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh venenatis cras sed.</p>
                            </div>
                            <div className="cars__link all">More <MdKeyboardArrowDown/></div>
                        </div>
                        <div className="cars__features features-cars">
                            <h2 className="features-cars__title title">Features</h2>
                            <div className="features-cars__body">
                                <div className="features-cars__column">
                                    <h4 className="features-cars__name">Interior</h4>
                                    <ul className="features-cars__list">
                                        <li className="features-cars__item"><BsCheck/>Air conditioning</li>
                                        <li className="features-cars__item"><BsCheck/>Bluetooth system</li>
                                        <li className="features-cars__item"><BsCheck/>Climate control</li>
                                        <li className="features-cars__item"><BsCheck/>Cooled front seats</li>
                                        <li className="features-cars__item"><BsCheck/>Cruise control</li>
                                        <li className="features-cars__item"><BsCheck/>Heated seats</li>
                                        <li className="features-cars__item"><BsCheck/>Leather seats</li>
                                        <li className="features-cars__item"><BsCheck/>Sunroof</li>
                                        <li className="features-cars__item"><BsCheck/>Navigation system</li>
                                        <li className="features-cars__item"><BsCheck/>Power locks</li>
                                        <li className="features-cars__item"><BsCheck/>Power seats</li>
                                        <li className="features-cars__item"><BsCheck/>Power windows</li>
                                        <li className="features-cars__item"><BsCheck/>Premium sound system</li>
                                        <li className="features-cars__item"><BsCheck/>Tuner/radio</li>
                                        <li className="features-cars__item"><BsCheck/>Rear camera</li>
                                    </ul>
                                </div>
                                <div className="features-cars__column">
                                    <h4 className="features-cars__name">Exterior</h4>
                                    <ul className="features-cars__list">
                                        <li className="features-cars__item"><BsCheck/>Fog lights</li>
                                        <li className="features-cars__item"><BsCheck/>Keyless go</li>
                                        <li className="features-cars__item"><BsCheck/>Performance tyres</li>
                                        <li className="features-cars__item"><BsCheck/>Premium paint</li>
                                    </ul>
                                    <h4 className="features-cars__name">Security & Environment</h4>
                                    <ul className="features-cars__list">
                                        <li className="features-cars__item"><BsCheck/>4WD</li>
                                        <li className="features-cars__item"><BsCheck/>ABS</li>
                                        <li className="features-cars__item"><BsCheck/>Adaptive lighting</li>
                                        <li className="features-cars__item"><BsCheck/>Airbags (front and side)</li>
                                        <li className="features-cars__item"><BsCheck/>Tinted windows</li>
                                        <li className="features-cars__item"><BsCheck/>All wheel drive</li>
                                        <li className="features-cars__item"><BsCheck/>Adaptive cruise control</li>
                                        <li className="features-cars__item"><BsCheck/>Traction control</li>
                                        <li className="features-cars__item"><BsCheck/>Differential lock</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cars__questions questions-cars">
                            <div className="questions-cars__body">
                                <h2 className="questions-cars__title">Do you still have questions? Contact us for answers.</h2>
                                <div className="questions-cars__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                            </div>
                            <a href={"/"} className="questions-cars__button green-button green-button_big">Contact Us</a>
                        </div>
                        <div className="cars__links links-cars">
                            <h3 className="links-cars__title">Quick links</h3>
                            <div className="links-cars__body">
                                <div className="links-cars__column">
                                    <a href="/" className="links-cars__link">Toyota Land Cruiser for sale in Dubai</a>
                                    <a href="/" className="links-cars__link">Toyota Land Cruiser 2017</a>
                                </div>
                                <div className="links-cars__column">
                                    <a href="/" className="links-cars__link">Toyota for sale in Dubai</a>
                                    <a href="/" className="links-cars__link">All cars for sale in Dubai</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    { !isMoving && <DetailsInfo/>}
                </div>
            </div>
        </section>
    );
};

export default Details;