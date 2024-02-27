export const actions = {
    toggleIsPopupOpen: (isOpenPopup: boolean) => ({type: "TOGGLE_IS_POPUP_OPEN", isOpenPopup} as const)
}