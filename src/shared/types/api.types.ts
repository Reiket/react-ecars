export interface Image {
    data: {
        attributes: {
            formats: FormatsImage
        }
    }
}

interface FormatsImage {
    thumbnail?: {
        name: string
        url: string
    },
    medium?: {
        name: string
        url: string
    }
}