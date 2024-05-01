import {MenuConfigs, MenuEnums, ShipItem} from "../types/header.types";
import {FiltersType} from "../../../../Pages/components/Home/components/Offers/store/types/offers-reducer.types";
import {contactLinks, socialLinks} from "../../../../../shared/Contacts/contacts-aray";

export const currencyItem: Array<string> = ["USD", "EUR", "GBP"];
const shipItem = [
    {
        img: "assets/image/icons/flags/canada.svg",
        country: "Canada"
    } ,
    {
        img: "assets/image/icons/flags/usa.svg",
        country: "USA"
    } ,
    {
        img: "assets/image/icons/flags/europe.svg",
        country: "EU"
    }
] as ShipItem[]

export const menuConfigs = (filters: FiltersType) => ([
    {
        text: "Ship to:",
        items: shipItem,
        filter: filters.shipNumber,
        type: MenuEnums.selectShip
    },
    {
        text: "Currency:",
        items: currencyItem,
        filter: filters.currency,
        type: MenuEnums.selectCurrency
    }
] as MenuConfigs[])

export const headerContacts = [
    {
        items: socialLinks.slice(0,4),
        isText: false
    },
    {
        items: contactLinks,
        isText: true
    }
]
