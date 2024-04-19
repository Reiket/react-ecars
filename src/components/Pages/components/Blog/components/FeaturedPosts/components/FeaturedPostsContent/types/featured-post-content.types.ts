import {BlogPost} from "../../../../../../../../../app/api/types/blog.types";

export interface PFeaturedPostContent  {
    posts: BlogPost[]
    isLoading: boolean
    skeletonCount: number
}