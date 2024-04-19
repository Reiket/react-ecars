import React from 'react';
import {capitalizeFirstLetter} from "../../../../../../../../../shared/utils";
import {PBlogListCategory} from "../types/blog-list-categories.types";
import {useAppSelector} from "../../../../../../../../../app/store/hooks";
import {blogListSelectors} from "../../../store/selectors/blog-list-selectors";

const BlogListCategory: React.FC<PBlogListCategory> = ({ category, onClickToCategory}) => {
    const {isLoading} = useAppSelector(blogListSelectors)
    const onClickHandler = () => {
        onClickToCategory(category)
    }
    return  <button disabled={isLoading} onClick={onClickHandler}
                    type={"button"}
                    className="blog-list__category">{capitalizeFirstLetter(category)}</button>
};

export default BlogListCategory;