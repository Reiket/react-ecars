export type BurgerPropsType = {
    isBurger: boolean
    setIsBurger: (p: (prev: boolean) => boolean) => void
}

export type SearchFormPropsType = {
    isSearch: boolean
}