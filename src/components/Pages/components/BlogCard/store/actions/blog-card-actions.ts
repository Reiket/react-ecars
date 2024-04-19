import {BlogPost} from "../../../../../../app/api/types/blog.types";

export const actions = {
    setBlogCard: (blogCard: BlogPost) => ({type: "blogCard/card", blogCard} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "blogCard/loading", isLoading} as const),
    setRelatedPosts: (relatedPosts: BlogPost[]) => ({type: "blogCard/relatedPosts", relatedPosts} as const),
    toggleIsRelatedLoading: (isRelatedLoading: boolean) => ({type: "blogCard/relatedPosts/loading", isRelatedLoading} as const),

}