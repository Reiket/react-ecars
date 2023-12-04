import {ContactsArrayType} from "../../../../../shared/Contacts/contacts-aray";

export type FooterItemsType = {
    isLogo: boolean
    title: string
    links: Array<ContactsArrayType>
}

let sentence = "Hello, world! World is beautiful.";
console.log(sentence.lastIndexOf("World")); // Повертає 13


