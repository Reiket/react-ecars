import React from 'react';
import {BrandsCardPropsTypes} from "./types/brands-card.types";
import {Link} from "react-router-dom";

const BrandsCard: React.FC<BrandsCardPropsTypes> = ({name, imageUrl}) => {

    return  <Link to={"/"} className="brands__item">
        <div className="brands__image">
            <img src={imageUrl} alt="Brands"/>
        </div>
        <h4 className="brands__name">{name}</h4>
    </Link>
};

export default BrandsCard;