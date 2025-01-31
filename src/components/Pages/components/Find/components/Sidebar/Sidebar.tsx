import React, {forwardRef} from 'react';
import Label from "../../../../../../shared/components/forms/Form/Label/Label";
import Select from "../../../../../../shared/components/forms/Form/Select/Select";
import {useForm} from "react-hook-form";
import {Inputs} from "../../../../../../shared/components/Popup/components/GetQuotePopup/types/get-quote.types";
import LabelContainer from "../../../../../../shared/components/forms/Form/Label/LabelContainer";
import Checkbox from "../../../../../../shared/components/forms/Form/Checkbox/components/Checkbox";
import "src/shared/components/sliders/RangeSlider/styles/range.scss"
import RangeSlider from "../../../../../../shared/components/sliders/RangeSlider/RangeSlider";
import HeaderSidebar from "./components/HeaderSidebar";
import {cn} from "../../../../../../shared/utils";
import {MdKeyboardArrowDown} from "react-icons/md";
import {useWindowWidth} from "../../../../../../shared/hooks/useWindowWidth";
import FooterSidebar from "./components/FooterSidebar";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

interface SidebarProps {
    isOpen: boolean
    onClick: () => void
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(function Sidebar(props, ref) {
    const { isOpen, onClick } = props;
    const [rangeValue, setRangeValue] = React.useState([0, 120000]);
    const isMoving = useWindowWidth(991.98);
    const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const match = event.target.value.match(/\d+/);
        const inputValue = match ? Number(match[0]) : 0;
        setRangeValue((value) => {
            const newInputValue = [...value];
            newInputValue[i] = inputValue;
            return newInputValue;
        });
    };
    const { register, control } = useForm<Inputs>();

    return (
        <aside
            ref={ref}
            tabIndex={-1}
            className={cn('find__sidebar sidebar', {
                active: isOpen,
            })}
        >
            {isMoving && <HeaderSidebar onClick={onClick} />}
            <div className="sidebar__body">
                <LabelContainer label="Make" hasDropdown hintType="bbb">
                    <Label>
                        <Select control={control} name="email" placeholder="EEEE" rules={{}} items={options} />
                    </Label>
                </LabelContainer>
                <LabelContainer label="Make" hasDropdown hintType="bbb">
                    <ul className="sidebar__list sidebar__list_select">
                        <li>
                            <Label>
                                <Select control={control} name="email" placeholder="EEEE" rules={{}} items={options} />
                            </Label>
                        </li>
                        <li>
                            <Label>
                                <Select control={control} name="email" placeholder="EEEE" rules={{}} items={options} />
                            </Label>
                        </li>
                    </ul>
                </LabelContainer>
                <LabelContainer label="Vehicle type" hasDropdown hintType="bbb">
                    <ul className="sidebar__list">
                        {[...Array(9)].map((_, index) => (
                            <li className="sidebar__item" key={index}>
                                <Checkbox checkboxId={`checkbox${index}`} isChecked onChange={() => true} />
                            </li>
                        ))}
                    </ul>
                </LabelContainer>
                <LabelContainer label="Kilometers" hintType="aa">
                    <form className="sidebar__form">
                        <input
                            type="text"
                            className="sidebar__range"
                            placeholder="Min 0"
                            onChange={(event) => handleInputValueChange(event, 0)}
                            value={`Min ${rangeValue[0]}`}
                        />
                        <input
                            type="text"
                            className="sidebar__range"
                            placeholder="Max 0"
                            onChange={(event) => handleInputValueChange(event, 1)}
                            value={`Max ${rangeValue[1]}`}
                        />
                    </form>
                    <RangeSlider value={rangeValue} onChange={() => {}} />
                </LabelContainer>
                <button className="sidebar__more icon-link">
                    More filters <MdKeyboardArrowDown />
                </button>
            </div>
            {isMoving && <FooterSidebar />}
        </aside>
    );
});

export default Sidebar;
