import {userLanguage} from "../../../../../shared/utils";

export  const checkValue = (value: string | number | boolean, key: string) => {
    if (typeof value === "number" && key === "kilometers") {
        return userLanguage(value);
    } else {
        return typeof value === "boolean" ? (value ? "Can be exported" : "Not can be exported") : value;
    }
}