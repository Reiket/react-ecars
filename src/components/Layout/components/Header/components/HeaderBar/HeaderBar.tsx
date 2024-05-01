import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../store/selectors/layout-selector";
import {actions} from "../../../../store/actions/layout-actios";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import BarLogo from "./components/BarLogo/BarLogo";
import BarUtils from "./components/BarUtils/BarUtils";
import {cn} from "../../../../../../shared/utils";
import useStickyHeader from "../../hooks/useStickyHeader";

const HeaderBar: React.FC = React.memo(() => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    const {isSticky, prevScrollPos} = useStickyHeader()
    return <PageSection name={"header-bar"} classnames={cn({
        "sticky": isSticky,
        "static": prevScrollPos === 0
    })}>
        <div className="header-bar__body">
            <BarLogo/>
            <Navbar/>
            <BarUtils/>
            <GreenButton onClick={togglePopup} type={"button"} text={"Get a quote"}/>
        </div>
    </PageSection>
})

export default HeaderBar;