import {BlogPost} from "../../../../../../../../app/api/types/blog.types";

export const actions = {
    setBlogPosts: (blogPosts: BlogPost[]) => ({type: "blogList/posts", blogPosts} as const),
    setCategory: (category: string | null) => ({type: "blogList/category", category} as const),
    setCurrentPage: (currentPage: number) => ({type: "blogList/currentPage", currentPage} as const),
    setTotalBlogPosts: (totalBlogPosts: number) => ({type: "blogList/totalBlogPosts", totalBlogPosts} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "blogList/loading", isLoading} as const),
}