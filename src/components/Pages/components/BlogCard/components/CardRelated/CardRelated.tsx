import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {isLoadingRelatedSelector, relatedPostsSelector} from "../../store/selectors/blog-card-selectors";
import BlogPost from "../../../../shared/components/BlogItem/BlogPost";
import Section from "../../../../../../shared/components/Section/Section";
import Container from "../../../../../../shared/components/Container/Container";

const CardRelated: React.FC = () => {
    const relatedPosts = useAppSelector(relatedPostsSelector);
    const isLoading = useAppSelector(isLoadingRelatedSelector)
    return <Section name={"card-related"} classnames={"blog-card__section_related"}>
        <Container classnames={"card-related"}>
            <Title tag={"h3"} text={"Related articles"} classnames={"block-title-news"}/>
            <div className="card-related__body">
                {relatedPosts.map((item) => {
                    let {id, attributes} = item
                    return <BlogPost classnames={"post-blog"} id={id}
                                     imageUrl={attributes.imageUrl!}
                                     key={id} category={attributes.category} title={attributes.title}/>
                })}
            </div>
        </Container>
    </Section>
}
export default CardRelated;