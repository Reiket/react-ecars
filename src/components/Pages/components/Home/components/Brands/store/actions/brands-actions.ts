import {Brands} from "../../../../../../../../app/api/types/brands.types";

export const actions = {
    setBrands: (items: Brands[]) => ({type: "brands/items", items} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "brands/loading", isLoading} as const),
    toggleMore: (hasMore: boolean) => ({type: "brands/more", hasMore} as const),
}