import {Image} from "../../../../../../shared/types/api.types";

export interface PBlogPost {
    id: number
    description?: string
    category: string
    title: string
    imageUrl: Image
    classnames: string
}