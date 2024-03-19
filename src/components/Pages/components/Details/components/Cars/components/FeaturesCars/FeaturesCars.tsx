import React from 'react';
import {BsCheck} from "react-icons/bs";
import {features, FeaturesCarsTypes} from "./types/features-cars.types";
import {Title} from "../../../../../../../../shared/components/Title/Title";

const splitFeatures = [
    [...features].slice(0, 1),
    [...features].slice(1)
];
const FeaturesCars = () => {
    const renderColumn = (items: Array<FeaturesCarsTypes>) => (
        <div className="features-cars__column">
            {items.map((feature, featureIndex) => (
                <div key={featureIndex}>
                    <Title tag={"h3"} text={feature.name} classnames={"features-cars__name item-title_small"}/>
                    <ul className="features-cars__list">
                        {feature.items.map((name, id) => (
                            <li key={id} className="features-cars__item">
                                <BsCheck/>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
    return <div className="cars__features features-cars">
        <Title tag={"h3"} classnames={"block-title"} text={"Features"}/>
        <div className="features-cars__body">
            {splitFeatures.map((items, index) => (
                <React.Fragment key={index}>
                    {renderColumn(items)}
                </React.Fragment>
            ))}
        </div>
    </div>

}



export default FeaturesCars;