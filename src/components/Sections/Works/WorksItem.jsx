import React from 'react';

const WorksItem = ({name, text, number}) => {
    return (
        <div className="works__item">
            <div className="works__number">{number}</div>
            <h3 className="works__name">{name}</h3>
            <div className="works__text">{text}</div>
        </div>
    );
};

export default WorksItem;