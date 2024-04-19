export interface PBlogListCategories {
    onClickToCategory: (category: string) => void
}

export type PBlogListCategory = PBlogListCategories & {category: string}