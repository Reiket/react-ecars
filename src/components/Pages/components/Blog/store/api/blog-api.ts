import {instance} from "../../../../../../app/api/api";
import {API} from "../../../../../../app/api/types/api.types";
import {BlogPost} from "../../../../../../app/api/types/blog.types";
import {BLOG_API_URL} from "./utils/blog-api-utils";


export const blogAPI = {
    async getBlogPosts(category: string | null, currentPage = 1, pageSize = 1,) {
        const postsCategory =   category  ? `&filters[category][$eq]=${category}` : ""
        return await instance.get<API<BlogPost[]>>(`${BLOG_API_URL.blogWithoutFeatured}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}${postsCategory}`)
    },
    async getFeaturedPosts() {
        return await instance.get<API<BlogPost[]>>(`${BLOG_API_URL.blog}&filters[recommended_status][$eq]=true`)
    },
    async getRelatedPosts(id: number, category: string, count: number) {
        return await instance.get<API<BlogPost[]>>(`${BLOG_API_URL.blogWithoutFeatured}&filters[id][$notContains]=${id}&filters[category]=${category}&pagination[pageSize]=${count}`)
    },
    async getBlogCard(id: number) {
        return await instance.get<API<BlogPost>>(BLOG_API_URL.blogById(id))
    },
    async getArticlePosts(count: number) {
        return await instance.get<API<BlogPost[]>>(`${BLOG_API_URL.blog}&pagination[pageSize]=${count}`)
    }
}