import {BlogPost} from "../../../../../../../../app/api/types/blog.types";

export const actions = {
    setPosts: (posts: BlogPost[]) => ({type: "featured/posts", posts} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "featured/loading", isLoading} as const),
}