import ship from "../json/shipItem.json"
export type menuConfigsType = {
    text?: string
    items: Array<shipItemType> | Array<string>
    filter: number
    type: MenuEnums.selectCurrency | MenuEnums.selectShip
}

export type shipItemType = {
    img?: string
    country?: string
}
export const shipItem: Array<shipItemType> = ship ;

export enum MenuEnums {
    selectShip,
    selectCurrency
}
