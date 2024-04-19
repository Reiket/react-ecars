export type API<T> = {
    data: T,
    meta?: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}