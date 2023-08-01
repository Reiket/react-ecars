import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {AiOutlineHeart} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import 'swiper/css';
const OffersSlide = () => {
    return (

      <>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <button className="item-offers__favorite"><AiOutlineHeart/></button>
                  <img src="/assets/image/offer/01.png" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2021 Genesis GV80 2.5T</h4>
                  <div className="item-offers__description">Used • 27,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$45,995</div>
                      <div className="item-offers__discount">$51,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <img src="/assets/image/offer/02.png" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2021 Genesis GV80 2.5T</h4>
                  <div className="item-offers__description">Used • 27,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$45,995</div>
                      <div className="item-offers__discount">$51,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <img src="/assets/image/offer/03.png" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2021 Genesis GV80 2.5T</h4>
                  <div className="item-offers__description">Used • 27,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$45,995</div>
                      <div className="item-offers__discount">$51,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <img src="/assets/image/offer/04.png" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2021 Genesis GV80 2.5T</h4>
                  <div className="item-offers__description">Used • 27,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$45,995</div>
                      <div className="item-offers__discount">$51,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <img src="/assets/image/offer/05.jpg" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2022 Kia K5 GT</h4>
                  <div className="item-offers__description">Used • 27,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$45,995</div>
                      <div className="item-offers__discount">$51,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <img src="/assets/image/offer/06.jpg" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2021 Toyota Camry 2.5 D-4S</h4>
                  <div className="item-offers__description">Used • 27,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$45,995</div>
                      <div className="item-offers__discount">$51,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={"section-offers__item item-offers"}>
              <div className="item-offers__image">
                  <img src="/assets/image/offer/07.jpg" alt="Car"/>
              </div>
              <div className="item-offers__info">
                  <h4 className="item-offers__name">2018 Lexus LX570</h4>
                  <div className="item-offers__description">Used • 16,057 mi • Petrol</div>
                  <div className="item-offers__bottom">
                      <div className="item-offers__price">$32,995</div>
                      <div className="item-offers__discount">$49,490</div>
                      <a href={"/"} className="item-offers__details">Details <MdOutlineKeyboardArrowRight/></a>
                  </div>
              </div>
          </SwiperSlide>
      </>
    );
};

export default OffersSlide;