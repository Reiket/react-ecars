import items from "../json/worksItem.json";

type worksItemsType = {
    id: number
    name: string
    text: string
}
export const worksItems: Array<worksItemsType> = items