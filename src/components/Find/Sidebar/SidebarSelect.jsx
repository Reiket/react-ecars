import React from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const SidebarSelect = () => {
    const animatedComponents = makeAnimated();
    return (
        <label className="sidebar__label">
            <div className="sidebar__top sidebar__top_padding">
                <h4 className="sidebar__title">Country</h4>
                <div className="sidebar__reset">Reset</div>
            </div>
            <Select components={animatedComponents} classNamePrefix={"select"} options={options} />
        </label>
    );
};

export default SidebarSelect;