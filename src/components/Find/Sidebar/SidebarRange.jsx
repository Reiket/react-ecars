import React from 'react';
import Slider from "rc-slider";
import '../../../scss/base/range.scss';
const SidebarRange = () => {
    const [rangeValue, setRangeValue] = React.useState([0, 120000]);
    const handleRangeValueChange = num => {
        setRangeValue(num);
    }

    const handleInputValueChange = (event, i) => {
        const match = event.target.value.match(/\d+/);
        const inputValue = match ? Number(match[0]) : 0;
        setRangeValue(value => {
            const newInputValue = [...value];
            newInputValue[i] = inputValue;
            return newInputValue;
        })
    }
    return (
        <label className="sidebar__label">
            <div className="sidebar__top sidebar__top_padding">
                <h4 className="sidebar__title">Price, USD</h4>
                <div className="sidebar__reset">Reset</div>
            </div>
            <form className={"sidebar__form"}>
                <input type="text" className={"sidebar__range"}  placeholder={"Min 0"} onChange={(event) =>handleInputValueChange(event, 0)} value={"Min " + rangeValue[0]}/>
                <input type="text" className={"sidebar__range"}  placeholder={"Max 0"} onChange={(event) =>handleInputValueChange(event, 1)} value={"Max " + rangeValue[1]}/>
            </form>
            <Slider range onChange={handleRangeValueChange}  value={rangeValue} max={120000}/>
        </label>
    );
};

export default SidebarRange;