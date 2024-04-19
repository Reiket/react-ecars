import React from 'react';

const FeaturedPostSkeleton: React.FC = () => {
    return  <div className={"featured-post__article featured-post-skeleton"}>
        <div className="featured-post__image"/>
        <div className="featured-post__content">
            <button
                className={`featured-post__category`}/>
            <div className="featured-post__title"/>
        </div>
    </div>
};

export default FeaturedPostSkeleton;