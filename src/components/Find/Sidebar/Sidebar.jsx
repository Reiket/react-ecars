import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import Select from "react-select";
import {BiSolidDownArrow} from "react-icons/bi";
import SidebarCheckbox from "./SidebarCheckbox";
import makeAnimated from "react-select/animated";
import SidebarSelect from "./SidebarSelect";
import SidebarRange from "./SidebarRange";
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Sidebar = () => {
    const animatedComponents = makeAnimated();
    const [isMenuOpen, setIsMenuOpen] = React.useState(true);
    const onClickArrow = () => {
        setIsMenuOpen(prev => !prev)
    }
    return (
        <aside className="find__sidebar sidebar">
            <div className="sidebar__inner">
                <div className="sidebar__header header-sidebar">
                    <h3 className="header-sidebar__title">Filters</h3>
                    <AiOutlineClose/>
                </div>
                <div className="sidebar__body">
                    <label className="sidebar__label">
                        <div className="sidebar__top">
                            <h4 className="sidebar__title">Make</h4>
                            <div className="sidebar__reset">Reset</div>
                        </div>
                        <Select components={animatedComponents} classNamePrefix={"select"} options={options} />
                    </label>
                   <SidebarSelect/>
                    <label className="sidebar__label">
                        <div className="sidebar__top sidebar__top_padding">
                            <h4 className="sidebar__title sidebar__title_spoller">Vehicle type</h4>
                            <button className="sidebar__reset">Reset</button>
                            <BiSolidDownArrow onClick={onClickArrow} className={isMenuOpen ? "sidebar__arrow active" : "sidebar__arrow"}/>
                        </div>
                        {
                            isMenuOpen && <div className="sidebar__checkbox">
                                <SidebarCheckbox/>
                            </div>
                        }
                    </label>
                   <SidebarRange/>
                    <label className="sidebar__label">
                        <div className="sidebar__top sidebar__top_padding">
                            <h4 className="sidebar__title">Year</h4>
                            <div className="sidebar__reset">Reset</div>
                        </div>
                        <div className="sidebar__selects">
                            <div className="sidebar__select">
                                <Select components={animatedComponents}  placeholder={"Min"} classNamePrefix={"select"} options={options} />
                            </div>
                            <div className="sidebar__select">
                                <Select components={animatedComponents}  autoFocus={true} placeholder={"Max"} classNamePrefix={"select"} options={options} />
                            </div>
                        </div>
                    </label>
                    <SidebarRange/>
                    <SidebarSelect/>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;