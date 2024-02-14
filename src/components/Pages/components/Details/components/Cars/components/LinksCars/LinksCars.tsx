import React from 'react';
import BlockTitle from "../../../../../../../../shared/components/Title/BlockTitle";

const LinksCars = () => {
    return <div className="cars__links links-cars">
        <BlockTitle text={"Quick links"}/>
        <div className="links-cars__body">
            <div className="links-cars__column">
                <a href="/" className="links-cars__link">Toyota Land Cruiser for sale in Dubai</a>
                <a href="/" className="links-cars__link">Toyota Land Cruiser 2017</a>
            </div>
            <div className="links-cars__column">
                <a href="/" className="links-cars__link">Toyota for sale in Dubai</a>
                <a href="/" className="links-cars__link">All cars for sale in Dubai</a>
            </div>
        </div>
    </div>
}

export default LinksCars;