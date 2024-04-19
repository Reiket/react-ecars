import React from 'react';
import {newsCardList} from "../../../utils";
import {PInfo} from "../types/card-info.types";
import BlogCategory from "../../../../../shared/components/BlogItem/components/BlogCategory";


const InfoList: React.FC<PInfo> = ({category, views, added}) => {
    return <ul className="card-info__list">
        <BlogCategory category={category}/>
        {newsCardList(added, views).map((item, id) =>
            <li key={id} className="card-info__text">{<item.icon/>}{item.text}</li>)}
    </ul>
};

export default InfoList;