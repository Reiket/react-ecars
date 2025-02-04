import React, {FC} from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import {AiOutlineClose} from "react-icons/ai";

interface HeaderSidebarProps {
    onClick: () => void
}


const HeaderSidebar: FC<HeaderSidebarProps> = ({onClick}) => {
    return <div className="sidebar__header header-sidebar">
        <Title tag={"h3"} text={"Filters"} classnames={"header-sidebar__title"}/>
        <button onClick={onClick} className={"header-sidebar__close"}><AiOutlineClose/></button>
    </div>
};

export default HeaderSidebar;