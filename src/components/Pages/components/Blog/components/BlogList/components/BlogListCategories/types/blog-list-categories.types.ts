export interface PBlogListCategories {
    onClickToCategory: (category: string) => void
}
export interface PBlogListCategory extends PBlogListCategories {
    categoryBlog: string
}