import {BlogPost} from "../../../../../../../../app/api/types/blog.types";

export const actions = {
    setArticlePosts: (articlePosts: BlogPost[]) => ({type: "articles/articlePosts", articlePosts} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "articles/loading", isLoading} as const),
}