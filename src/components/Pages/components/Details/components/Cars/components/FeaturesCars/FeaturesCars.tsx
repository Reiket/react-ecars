import React from 'react';
import {BsCheck} from "react-icons/bs";
import {features, FeaturesCarsTypes} from "./types/features-cars.types";
const splitFeatures = [
    [...features].slice(0, 1),
    [...features].slice(1)
];
const FeaturesCars = () => {
    const renderColumn = (items: Array<FeaturesCarsTypes>) => (
        <div className="features-cars__column">
            {items.map((feature, featureIndex) => (
                <div key={featureIndex}>
                    <h4 className="features-cars__name">{feature.name}</h4>
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
        <h2 className="features-cars__title title">Features</h2>
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