import {PostType} from "../../../store/types/news-reducer.types";

type TBlogItem = {
    isMoving: boolean
}

export type TBlogItemProps = TBlogItem & PostType

