import React from 'react';
import NewsList from "./NewsList";
import NewsPost from "./NewsPost";
import {Title} from "../../../../shared/components/Title/Title";
import Text from "../../../../shared/components/Title/Text";
import {useWindowWidth} from "../../../../shared/hooks/useWindowWidth";


const News: React.FC = () => {
    const isMoving = useWindowWidth(1140)
    return <section className="section__news news">
        <div className="news__container">
            <Title tag={"h1"} text={"Blog & News"} classnames={"page-title page-title_text"}/>
            <Text classnames={"text_sub"} text={"Company and car market news, as well as car selection guides and car reviews from our authors."}/>
            <div className="news__body">
                <NewsList isMoving={isMoving}/>
                <NewsPost isMoving={isMoving}/>
            </div>
        </div>
    </section>
};

export default News;