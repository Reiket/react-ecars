import {Content} from "../../../../../../../app/api/types/blog.types";

export interface PInfo  {
    category: string
    added: string
    views: number
}

export interface PInfoContent {
    content: Content[]
}