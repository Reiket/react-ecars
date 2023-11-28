import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import Select from "react-select";
import {BiSolidDownArrow} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import Slider from "rc-slider";
import FindCard from "./Card/FindCard";
import Sidebar from "./Sidebar/Sidebar";
import Title from "../Shared/components/Title";

const Find = () => {
    return (
        <section className="section__find find">
            <div className="find__container">
                <Title text={"Find cars to fit your criteria"}/>
                <div className="find__body">
                    <Sidebar/>
                    <FindCard/>
                </div>
            </div>
        </section>
    );
};

export default Find;