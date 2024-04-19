import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../../../app/store/hooks";
import FeaturedPostSlider from "./components/FeaturedPostsContent/FeaturedPostSlider";
import {featuredPostsSelector} from "./store/selectors/featured-posts-selectors";
import {fetchFeaturedPosts} from "./store/thunk/fetchFeaturedPosts";
import Section from "../../../../../../shared/components/Section/Section";
import FeaturedPostTop from "./components/FeaturedPostTop/FeaturedPostTop";
import FeaturedPostsContent from "./components/FeaturedPostsContent/FeaturedPostsContent";
import {useWindowWidth} from "../../../../../../shared/hooks/useWindowWidth";


const skeletonCount = 7

const FeaturedPosts: React.FC = React.memo(() => {
    const {posts, isLoading} = useAppSelector(featuredPostsSelector)
    const isMoving = useWindowWidth(1161)
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchFeaturedPosts())
    }, [dispatch])
    const featuredPostRender = () => {
        if (!isMoving) {
            return <FeaturedPostsContent posts={posts} isLoading={isLoading} skeletonCount={skeletonCount}/>
        } else {
            return <FeaturedPostSlider skeletonCount={skeletonCount} isLoading={isLoading}  posts={posts}/>
        }
    }
    return <Section name={"featured-posts"}>
        <div className="featured-posts__body">
           <FeaturedPostTop/>
            {featuredPostRender()}
        </div>
    </Section>
})





export default FeaturedPosts;