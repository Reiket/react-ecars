import { instance } from "src/app/api/api";
import { API } from "src/app/api/types/api.types";
import { BlogPost } from "src/app/api/types/blog.types";
import { API_PATH } from "src/app/api/api-path";

export const blogAPI = {
  async getBlogPosts(category: string | null, currentPage = 1, pageSize = 1) {
    const postsCategory = category ? `&filters[category][$eq]=${category}` : "";
    return await instance.get<API<BlogPost[]>>(
      `${API_PATH.blogWithoutFeatured}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}${postsCategory}`,
    );
  },
  async getFeaturedPosts() {
    return await instance.get<API<BlogPost[]>>(
      `${API_PATH.blog}&filters[recommended_status][$eq]=true`,
    );
  },
  async getRelatedPosts(id: number, category: string, count: number) {
    return await instance.get<API<BlogPost[]>>(
      `${API_PATH.blogWithoutFeatured}&filters[id][$notContains]=${id}&filters[category]=${category}&pagination[pageSize]=${count}`,
    );
  },
  async getBlogCard(id: number) {
    return await instance.get<API<BlogPost>>(API_PATH.blogById(id));
  },
  async getArticlePosts(count: number) {
    return await instance.get<API<BlogPost[]>>(
      `${API_PATH.blog}&pagination[pageSize]=${count}`,
    );
  },
};
