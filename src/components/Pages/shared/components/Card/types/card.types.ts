type PropertiesType = {
  model: string;
  color: string;
  make: string;
  type: string;
  year: number;
  kilometers: number;
  wheels: string;
  location: string;
  export_status: boolean;
  gearbox: string;
  fuel: string;
  seats: number;
  cylinders: number;
  interior: string;
  status: string;
};
export type ItemsType = {
  id: number;
  imageUrl: string;
  isPremium: boolean;
  isSpecialOffer: boolean;
  description: string;
  price: {
    USD: number;
    EUR: number;
    GBP: number;
  };
  discountPercent: number;
  ship: number;
  added: string;
  views: number;
  properties: PropertiesType;
};
export type CardProps = {
  item: ItemsType;
  currency: number;
  type: "row" | "column";
};
