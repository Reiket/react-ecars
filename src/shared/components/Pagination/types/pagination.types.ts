export type TPagination = {
    currentPage: number
    total: number
    size: number
    isLoading: boolean
    onClick: (currentPage: number) => void
}