import React from 'react';
import {AiFillLinkedin, AiOutlineCalendar, AiOutlineEye, AiOutlineLink, AiOutlineTwitter} from "react-icons/ai";
import {RiPriceTag3Line} from "react-icons/ri";
import {BiLogoFacebook} from "react-icons/bi";
import BlogItem from "../Pages/components/Home/components/Blog/components/BlogItem";
import Title from "../../shared/components/Title/Title";
import GreenButton from "../../shared/components/GreenButton/GreenButton";

const NewsCard = () => {
    return (
        <section className="section__news-card news-card">
            <div className="news-card__container">
                <div className="news-card__url">Home Blog Guides 7 tips when buying a new car in UAE</div>
                <div className="news-card__body">
                    <Title text={"7 tips when buying a new car in UAE"} classnames={"news-card__title"}/>
                    <ul className="news-card__list">
                        <button className="item-blog__category item-blog__category_guide">Guides</button>
                        <li className="news-card__text"><AiOutlineCalendar/>Jan 14, 2023</li>
                        <li className="news-card__text"><AiOutlineEye/>2305 views</li>
                        <li className="news-card__text"><RiPriceTag3Line/>tips, new car, UAE, Dubai</li>
                    </ul>
                    <div className="news-card__image">
                        <img src="/assets/image/blog/news-blog/news-card/01.png" alt=""/>
                    </div>
                    <p className="news-card__paragraph">Buying a new car in UAE is not easy. With over 60 brands to choose from and 1,000’s of cars popping up for sale every day, there’s a lot to choose from and some incredible deals out there. But before you rush out there, we’ve got a few tips for you to bear in mind.</p>
                    <p className="news-card__paragraph">Online portals like Dubicars do make the buying process easier by showing you new and used cars for sale all over the Emirates. By new car, we don’t mean a vehicle that has never been driven with zero km on the clock and has never had a previous owner. By new car, we mean a replacement to your current car or a first time purchase.</p>
                    <p className="news-card__paragraph">Now let’s get into the guide</p>
                    <div className="news-card__description">
                        <h3 className="news-card__point">Research</h3>
                        <p className="news-card__paragraph">Before sealing the deal, before looking at a car, do your research on the vehicle or vehicles you are considering buying.</p>
                        <p className="news-card__paragraph">What to research beforehand;</p>
                        <ul className="news-card__adv">
                            <li>Reliability</li>
                            <li>Known problems</li>
                            <li>Overall value</li>
                            <li>Is it the right car for you and your family</li>
                        </ul>
                        <p className="news-card__paragraph">Take your time and don’t rush into a purchase even if it screams “AMAZING DEAL, CHANCE OF A LIFETIME, DON’T MISS OUT” as you could face issues further down the line.</p>
                    </div>
                    <div className="news-card__description">
                        <h3 className="news-card__point">Look around</h3>
                        <p className="news-card__paragraph">You may have found the perfect car you, but that shouldn’t stop you from looking around and finding other potential purchases. Always look for an alternative or two just in case you find something you don’t like about your first choice.</p>
                        <p className="news-card__paragraph">With Dubicars you can Save your favourite cars in My Garage and view them all later. This is also a great place to organise cars you want to look at before making a final purchase</p>
                    </div>
                    <div className="news-card__description">
                        <h3 className="news-card__point">Get your finances in order</h3>
                        <p className="news-card__paragraph">Before you start looking for a car, first ask yourself “can I afford this car?” Buying a car is not a small purchase. On all listings, Dubicars gives you a finance calculator that you can use to calculate how much the car will cost over a certain amount of years. Budget yourself correctly, and don’t overspend. Yes that <a href="https://www.dubicars.com/news/2020-mercedes-benz-glc-63-amg-the-ultimate-crossover.html">GLC 63s AMG</a> is nice, but the <a href="https://www.dubicars.com/news/2020-toyota-c-hr-crossover-to-the-wild-side.html">Toyota C-HR</a> is more cost-effective.</p>
                    </div>
                    <ul className="news-card__share share-news">
                        <h5 className="share-news__title">Share:</h5>
                        <li className="share-news__item"><a href="" className="share-news__link"><BiLogoFacebook/>Facebook</a></li>
                        <li className="share-news__item"><a href="" className="share-news__link"><AiOutlineTwitter/>Twitter</a></li>
                        <li className="share-news__item"><a href="" className="share-news__link"><AiFillLinkedin/>Linkedin</a></li>
                        <li className="share-news__item"><a href="" className="share-news__link"><AiOutlineLink/>Copy link</a></li>
                    </ul>
                    <div className="news-card__stay stay-news">
                        <h3 className="stay-news__title">Stay up to date</h3>
                        <div className="stay-news__text">Don't miss the latest news, reviews and guides from our experts. Get updates in your inbox. No spam.</div>
                        <form action="" className="stay-news__form">
                            <input type="email" placeholder={"Email"} className="stay-news__input"/>
                            <GreenButton classnames={"stay-news__button green-button_big"} text={"Subscribe"} type={"button"}/>
                        </form>
                    </div>
                </div>
            </div>
            <article className="news-card__articles news-articles">
                <div className="news-articles__container">
                    <h3 className="news-articles__title">Related articles</h3>
                    <div className="news-articles__body">
                        <BlogItem isMoving={true}/>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default NewsCard;