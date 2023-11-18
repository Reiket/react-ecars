import blog from "../../../../../../../../json/blogCategory.json";


export type BlogItemPropsType = {
    isMoving: boolean
    imageUrl: string
    category: number
    title: string
    text: string
}
type BlogType = {
    name: string
    color: string
}
export const blogCategory: Array<BlogType> = blog

