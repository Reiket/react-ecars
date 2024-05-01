
export interface MenuConfigs  {
    text?: string
    items: Array<ShipItem> | Array<string>
    filter: number
    type: MenuEnums.selectCurrency | MenuEnums.selectShip
}

export interface ShipItem  {
    img?: string
    country?: string
}

export enum MenuEnums {
    selectShip,
    selectCurrency
}
