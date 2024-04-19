import {instance} from "../../../../../../../app/api/api";
import {Brands} from "../../../../../../../app/api/types/brands.types";
import {API} from "../../../../../../../app/api/types/api.types";

export const brandsAPI = {
    async getBrands(hasMore: boolean) {
        const isPaging = !hasMore ? "&pagination[page]=1&pagination[pageSize]=6" : ""
        return await instance.get<API<Brands[]>>(`/brands?populate=*${isPaging}`)
    }
}