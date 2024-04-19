import React from 'react';
import {useAppSelector} from "../../../../../../app/store/hooks";
import Breadcrumbs from "../../../../../../shared/components/BreadCrumbs/Breadcrumbs";
import {Title} from "../../../../../../shared/components/Title/Title";
import InfoList from "./components/InfoList";
import InfoContent from "./components/InfoContent";
import {blogCardSelector} from "../../store/selectors/blog-card-selectors";
import Image from "../../../../../../shared/components/Image/Image";
import Section from "../../../../../../shared/components/Section/Section";

const CardInfo: React.FC = () => {
    const {attributes: {views, imageUrl, added, category, title, content}} = useAppSelector(blogCardSelector);
    const url = imageUrl!.data.attributes.formats.medium!.url
    return <Section name={"card-info"} classnames={"blog-card__section_info"}>
        <Breadcrumbs/>
        <div className="card-info__body">
            <Title tag={"h1"} classnames={"page-title"} text={title}/>
            <InfoList views={views} added={added} category={category}/>
            <Image url={url} name={"card-info"} alt={"BlogCardImg"}/>
            <InfoContent content={content!}/>
        </div>
    </Section>
};

export default CardInfo;