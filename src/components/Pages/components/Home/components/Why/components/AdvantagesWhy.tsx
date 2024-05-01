import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import {amountAdvantages} from "../utils/why-utils";
const AdvantagesWhy = () => {
    return <ul className="why__advantages advantages-why">
        {[...Array(amountAdvantages)].map((_, id) => (
        <li key={id} className="advantages-why__item">
            <Title text={"Some headline"} tag={"h3"}
                   classnames={"advantages-why__title item-title_small"}/>
            <p className="advantages-why__text">Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.</p>
        </li>
    ))}
</ul>
};

export default AdvantagesWhy;