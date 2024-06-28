import React from 'react';
import {Title} from "../../../../../../shared/components/Title/Title";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {isLoadingRelatedSelector, relatedPostsSelector} from "../../store/selectors/blog-card-selectors";
import BlogPost from "../../../../shared/components/BlogItem/BlogPost";
import Section from "../../../../../../shared/components/Section/Section";
import Container from "../../../../../../shared/components/Container/Container";
import BlogPostSkeleton from "../../../../shared/components/BlogItem/loader/BlogPostSkeleton";

const CardRelated: React.FC = () => {
    const relatedPosts = useAppSelector(relatedPostsSelector);
    const isLoading = useAppSelector(isLoadingRelatedSelector)
    return <Section name={"card-related"} classnames={"blog-card__section_related"}>
        <Container classnames={"card-related"}>
            <Title tag={"h3"} text={"Related articles"} classnames={"block-title-news"}/>
            <div className="card-related__body">
                {!isLoading ? relatedPosts.map((item) => {
                    let {id, attributes} = item
                    return <BlogPost classnames={"post-blog"} id={id}
                                     imageUrl={attributes.imageUrl!}
                                     key={id} category={attributes.category} title={attributes.title}/>
                }) : [...Array(4)].map((_, i) =>  <BlogPostSkeleton key={i} classnames={"related-post-skeleton"}/>)}
            </div>
        </Container>
    </Section>
}
export default CardRelated;