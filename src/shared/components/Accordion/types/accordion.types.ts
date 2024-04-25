export interface PAccordion extends PAccordionContent, PAccordionButton {
    onClick: () => void
    title: string
}

export interface PAccordionContent {
    isOpen: boolean
    text: string
}

export interface PAccordionButton {
    onClick: () => void
}