import React from 'react';
import ImageGallery from "react-image-gallery";
import {MdKeyboardArrowDown} from "react-icons/md";
import {BsCheck} from "react-icons/bs";
import '../../scss/base/gallery.scss'
import DetailsInfo from "./DetailsInfo";
import featuresItem from "../../json/featuresItem.json"
import listItem from "../../json/listItem.json"
import DetailsLoader from "../Loader/DetailsLoader";

const Details = ({itemById, currency, isFetchingItemsById}) => {
    const [isMoving, setIsMoving] = React.useState(false);
    const [isMoreOpen, setIsMoreOpen] = React.useState(false);
    const images = Array.from({ length: 6 }, (_, i) => ({
        original: itemById.imageUrl,
        thumbnail: itemById.imageUrl,
    }));
    const onClickToMore = () => {
        setIsMoreOpen(prev => !prev)
    }
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

    return !isFetchingItemsById ?   <section className="section__details details">
        <div className="details__container">
            <div className="details__path">Home Used cars for sale in Dubai Toyota Toyota Land Cruiser</div>
            <div className="details__body">
                <div className="details__cars cars">
                    <ImageGallery items={images} showIndex={true}/>
                    {isMoving && <DetailsInfo itemById={itemById} currency={currency}/>}
                    <div className="cars__list list-cars">
                        {itemById && itemById.properties && <ul className="list-cars__column">
                            {Object.entries(itemById.properties).map(([key, value]) => (
                                <li className="list-cars__item" key={key}>
                                    <h5 className="list-cars__title">{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                                    <div className="list-cars__text">{value}</div>
                                </li>
                            ))}
                        </ul>}

                        <ul className="list-cars__column">
                            {listItem.map((item, id) => (
                                <li key={id} className="list-cars__item">
                                    <h5 className="list-cars__title">{item.name}</h5>
                                    <div className="list-cars__text">{item.text}</div>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="cars__description">
                        <h2 className="cars__title title">Description</h2>
                        <div className="cars__text">
                            <p>{itemById.name} Electric Leather Seats [RHD Japan Import] Premium Condition.</p>
                            <p> ----------------------------------------------------------------------------------------------------------------------</p>
                            <p> Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique senectus et. Eget gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum.</p>
                            <p> Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh venenatis cras sed.</p>
                        </div>
                        {isMoreOpen && <div className="cars__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos fugit, inventore minus modi quos ratione. Aut enim illum modi neque nesciunt quasi qui quidem quo repellat rerum. Culpa, quas?</p>
                        </div>}
                        <button onClick={onClickToMore} className="cars__link all">{isMoreOpen ? "Hide More" : "More"} <MdKeyboardArrowDown/></button>
                    </div>
                    <div className="cars__features features-cars">
                        <h2 className="features-cars__title title">Features</h2>
                        <div className="features-cars__body">
                            <div className="features-cars__column">
                                <h4 className="features-cars__name">{featuresItem[0].name}</h4>
                                <ul className="features-cars__list">
                                    {featuresItem[0].items.map((name, id) => <li key={id} className="features-cars__item"><BsCheck/>{name}</li>)}
                                </ul>
                            </div>
                            <div className="features-cars__column">
                                <h4 className="features-cars__name">{featuresItem[1].name}</h4>
                                <ul className="features-cars__list">
                                    {featuresItem[1].items.map((name, id) => <li key={id} className="features-cars__item"><BsCheck/>{name}</li>)}
                                </ul>
                                <h4 className="features-cars__name">{featuresItem[2].name}</h4>
                                <ul className="features-cars__list">
                                    {featuresItem[2].items.map((name, id) => <li key={id} className="features-cars__item"><BsCheck/>{name}</li>)}
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
                { !isMoving && <DetailsInfo itemById={itemById} currency={currency}/>}
            </div>
        </div>
    </section> : <DetailsLoader/>
};

export default Details;

