import React from 'react';

const BrandsCard = ({name, imageUrl}) => {
    return (
        <div className="brands__item">
            <div className="brands__image">
                <img src={imageUrl} alt="Brands"/>
            </div>
            <h4 className="brands__name">{name}</h4>
        </div>
    );
};

export default BrandsCard;