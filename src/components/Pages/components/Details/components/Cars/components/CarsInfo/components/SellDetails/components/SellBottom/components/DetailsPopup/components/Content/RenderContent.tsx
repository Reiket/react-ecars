import {useAppSelector} from "../../../../../../../../../../../../../../../../app/store/hooks";
import {selectDetail} from "../../../../../../../../../../../../store/selector/details-selector";
import Text from "../../../../../../../../../../../../../../../../shared/components/Title/Text";
import React from "react";
import {Title} from "../../../../../../../../../../../../../../../../shared/components/Title/Title";

const RenderContent: React.FC = () => {
    const detail = useAppSelector(selectDetail);
    if (detail.properties.export_status) {
        return (
            <>
                <div className="details-popup__check">
                    <img src="/assets/image/other/check.jpg" alt="Check"/>
                </div>
                <Title tag={"h3"} text={"Availability successfully checked!"} classnames={"details-popup__title"}/>
                <Text text={"Your car is ready for a road trip!"}/>
            </>
        );
    } else {
        return (
            <>
                <div className="details-popup__check">
                    <img src="/assets/image/other/fail.svg" alt="Check"/>
                </div>
                <Title tag={"h3"}  text={"Car is not available!"} classnames={"details-popup__title"}/>
                <Text text={"Sorry, but this car is not available. Please choose another car!"}/>
            </>
        );
    }
};

export default RenderContent;