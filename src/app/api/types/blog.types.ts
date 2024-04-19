import {Image} from "../../../shared/types/api.types";

export interface BlogPost {
    id: number
    attributes: Attributes
}

interface Attributes {
    imageUrl?: Image
    category: string
    title: string
    description?: string
    added: string
    views: number
    content?: Content[]
}
export interface Content  {
    title: string
    text: string
}