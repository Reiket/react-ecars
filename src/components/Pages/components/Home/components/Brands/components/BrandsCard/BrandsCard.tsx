import React from 'react';
import {Link} from "react-router-dom";
import {TPBrandsCard} from "./types/brands-card.types";
import {Title} from "../../../../../../../../shared/components/Title/Title";
import Image from "../../../../../../../../shared/components/Image/Image";

const BrandsCard: React.FC<TPBrandsCard> = ({name, imageUrl}) => {
    const url = imageUrl.data.attributes.formats.thumbnail.url
    return  <Link to={"/"} className="brands__item">
        <Image url={url} name={"brands"} alt={"Brands"}/>
        <Title text={name} tag={"h4"} classnames={"brands__name"}/>
    </Link>
};

export default BrandsCard;