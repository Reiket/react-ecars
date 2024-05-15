import React from 'react';
import {BiSolidDownArrow} from "react-icons/bi";
import Label from "../../../../../../shared/components/forms/Form/Label/Label";
import Select from "../../../../../../shared/components/forms/Form/Select/Select";
import {useForm} from "react-hook-form";
import {Inputs} from "../../../../../../shared/components/Popup/components/GetQuotePopup/types/get-quote.types";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(true);
    const {register, control} = useForm<Inputs>()
    const onClickArrow = () => {
        setIsMenuOpen(prev => !prev)
    }
    return  <aside className="find__sidebar sidebar">
        {/*<HeaderSidebar/>*/}
        <div className="sidebar__body">
            <Label name={"Make"} hintType={"button"}>
                <Select control={control} name={"email"} placeholder={"EEEE"} rules={{}} items={options}/>
            </Label>
            <label className="sidebar__label">
                <div className="sidebar__top sidebar__top_padding">
                    <h4 className="sidebar__title sidebar__title_spoller">Vehicle type</h4>
                    <button className="sidebar__reset">Reset</button>
                    <BiSolidDownArrow onClick={onClickArrow} className={isMenuOpen ? "sidebar__arrow active" : "sidebar__arrow"}/>
                </div>
                {
                    isMenuOpen && <div className="sidebar__checkbox">
                        {/*<SidebarCheckbox/>*/}
                    </div>
                }
            </label>
            {/*<SidebarRange/>*/}
            <label className="sidebar__label">
                <div className="sidebar__top sidebar__top_padding">
                    <h4 className="sidebar__title">Year</h4>
                    <div className="sidebar__reset">Reset</div>
                </div>
                <div className="sidebar__selects">
                    <div className="sidebar__select">
                        {/*<Select components={animatedComponents}  placeholder={"Min"} classNamePrefix={"select"} options={options} />*/}
                    </div>
                    <div className="sidebar__select">
                        {/*<Select components={animatedComponents}  autoFocus={true} placeholder={"Max"} classNamePrefix={"select"} options={options} />*/}
                    </div>
                </div>
            </label>
            {/*<SidebarRange/>*/}
            {/*<SidebarSelect/>*/}
        </div>
    </aside>
};

export default Sidebar;