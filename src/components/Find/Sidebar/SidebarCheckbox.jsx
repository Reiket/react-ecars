import React from 'react';
import {BsCheck} from "react-icons/bs";

const SidebarCheckbox = () => {
    return (
        <div className="checkbox">
            <input id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox"
                   value="1" name="form[]"/>
            <label htmlFor="c_1" className="checkbox__label"><BsCheck className={"checkbox__check"}/><span
                className="checkbox__text">SUV/Crossover</span></label>
        </div>
    );
};

export default SidebarCheckbox;