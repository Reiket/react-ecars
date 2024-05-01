export const actions = {
    toggleIsOpenGetPopup: (isOpenGetPopup: boolean) => ({type: "layout/getPopup", isOpenGetPopup} as const),
    toggleIsOpenContactPopup: (isOpenContactPopup: boolean) => ({type: "layout/contactPopup", isOpenContactPopup} as const),
    toggleIsBurger: (isBurger: boolean) => ({type: "layout/burger", isBurger} as const)
}