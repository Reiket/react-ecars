import React from 'react';
import {useClickOutside} from "../../../../../../../../../../shared/hooks/useClickOutside";
import MenuHelpButton from "./components/MenuHelpButton";
import MenuHelpList from "./components/MenuHelpList";

const MenuHelp: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuHelpRef = React.useRef<HTMLDivElement | null>(null);
    useClickOutside(menuHelpRef, setIsOpen)
    const onClickToPopup = () => {
        setIsOpen(prev => !prev)
    }
    return <div ref={menuHelpRef} className="info-header-top__item menu-help">
        <MenuHelpButton onClick={onClickToPopup}/>
        <MenuHelpList isOpen={isOpen}/>
    </div>
};

export default MenuHelp;