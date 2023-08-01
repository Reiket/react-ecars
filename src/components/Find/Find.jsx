import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import Select from "react-select";
import {BiSolidDownArrow} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import Slider from "rc-slider";
import FindCard from "./Card/FindCard";
import Sidebar from "./Sidebar/Sidebar";

const Find = () => {
    return (
        <section className="section__find find">
            <div className="find__container">
                <h2 className="find__title title">Find cars to fit your criteria</h2>
                <div className="find__body">
                    <Sidebar/>
                    <FindCard/>
                </div>
            </div>
        </section>
    );
};

export default Find;