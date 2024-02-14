type PropertiesType = {
    make: string
    model: string
    year: number
    color: string
    type: string
    kilometers: string
    wheels: string
    location: string
    isExport: boolean
}
export type ItemsType = {
    id: number
    imageUrl: string
    name: string
    description: string
    price: {
        USD: string
        EUR: string
        GBP: string
    },
    discount: string
    ship: number
    added: string
    views: number
    "properties": PropertiesType
}
