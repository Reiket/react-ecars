import {Image} from "../../../shared/types/api.types";

export interface Brands {
    id: number
    attributes: IAttributes
}


export interface IAttributes {
    name: string
    imageUrl: Image
}
