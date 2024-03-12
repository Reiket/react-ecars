export const actions = {
    toggleIsOpenGetPopup: (isOpenGetPopup: boolean) => ({type: "TOGGLE_IS_OPEN_GET_POPUP", isOpenGetPopup} as const),
    toggleIsOpenContactPopup: (isOpenContactPopup: boolean) => ({type: "TOGGLE_IS_OPEN_CONTACT_POPUP", isOpenContactPopup} as const),
}