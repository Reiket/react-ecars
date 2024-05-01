import React from 'react';
import {scrollToBlock} from "../../../utils/footer-utils";
import {PNavFooterBtn} from "../types/footer-item.types";

const NavFooterBtn: React.FC<PNavFooterBtn> = ({scroll, text}) => {
    const scrollFooterHandler = (scroll: string) => {
        scrollToBlock(scroll ? scroll : "")
    }
    return <button onClick={() => scrollFooterHandler((scroll) as string)}
                   className="nav-footer__link">{text}</button>
};

export default NavFooterBtn;