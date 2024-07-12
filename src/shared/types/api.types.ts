export interface Image {
  data: {
    attributes: {
      formats: FormatsImage;
    };
  };
}

export interface FormatsImage {
  thumbnail?: {
    name: string;
    url: string;
  };
  medium?: {
    name: string;
    url: string;
  };
}
