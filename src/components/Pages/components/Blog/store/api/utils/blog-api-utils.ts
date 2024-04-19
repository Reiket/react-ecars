export const BLOG_API_URL = {
    blog: "/articles?populate[0]=imageUrl",
    blogWithoutFeatured: "/articles?populate[0]=imageUrl&filters[recommended_status][$eq]=false",
    blogById: (id: number) => `/articles/${id}?populate=*`,
}