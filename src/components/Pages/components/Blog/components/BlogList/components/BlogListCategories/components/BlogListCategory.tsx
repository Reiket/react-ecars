import React from 'react';
import {capitalizeFirstLetter, cn} from "../../../../../../../../../shared/utils";
import {PBlogListCategory} from "../types/blog-list-categories.types";
import {useAppSelector} from "../../../../../../../../../app/store/hooks";
import {blogListSelectors} from "../../../store/selectors/blog-list-selectors";

const BlogListCategory: React.FC<PBlogListCategory> = ({ categoryBlog, onClickToCategory}) => {
    const {isLoading, category} = useAppSelector(blogListSelectors)
    const isCategoryActive = category === categoryBlog
    const onClickHandler = () => {
        onClickToCategory(categoryBlog)
    }
    return  <button disabled={isLoading || isCategoryActive} onClick={onClickHandler}
                    type={"button"}
                    className={cn("blog-list__category", {
                        "active": isCategoryActive
                    })}>{capitalizeFirstLetter(categoryBlog)}</button>
};

export default BlogListCategory;