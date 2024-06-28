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
import Button from "../../../../../../shared/components/buttons/GreenButton/Button";

const HeaderBar: React.FC = React.memo(() => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    const isSticky = useStickyHeader()
    return <PageSection name={"header-bar"} classnames={cn({
        "sticky": isSticky,
    })}>
        <div className="header-bar__body">
            <BarLogo/>
            <Navbar/>
            <BarUtils/>
            <Button onClick={togglePopup} type={"button"}>Get a quote</Button>
        </div>
    </PageSection>
})

export default HeaderBar;