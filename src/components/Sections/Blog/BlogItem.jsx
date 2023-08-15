import React from 'react';

const BlogItem = ({isMoving}) => {
    return (
        <>
            <div className={isMoving ? "blog__item item-blog" : "blog__item item-blog item-blog_big"}>
                <div className="item-blog__image">
                    <img src="/assets/image/blog/01.png" alt="Blog"/>
                </div>
                <div className="item-blog__content">
                    <button className="item-blog__category item-blog__category_guide">Guides</button>
                    <h3 className="item-blog__title">The rising cost of fuel in the UAE and how to avoid it</h3>
                    <div className="item-blog__text">Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur.</div>
                </div>
            </div>
            <div className="blog__item item-blog">
                <div className="item-blog__image">
                    <img src="/assets/image/blog/02.png" alt="Blog"/>
                </div>
                <div className="item-blog__content">
                    <button className="item-blog__category item-blog__category_news">Guides</button>
                    <h3 className="item-blog__title">These new EV pick up trucks are about to be all the rage</h3>
                    <div className="item-blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
            <div className="blog__item item-blog">
                <div className="item-blog__image">
                    <img src="/assets/image/blog/03.png" alt="Blog"/>
                </div>
                <div className="item-blog__content">
                    <button className="item-blog__category item-blog__category_guide">Guides</button>
                    <h3 className="item-blog__title">7 tips when buying a new car in UAE</h3>
                    <div className="item-blog__text">Platea dictumst quisque sagittis purus sit amet volutpat consequat. Porta nibh venenatis cras sed felis eget.</div>
                </div>
            </div>
        </>
    );
};

export default BlogItem;