import { FormatsImage } from "../../../shared/types/api.types";

export interface CarType {
  id: number;
  attributes: AttributesCar;
}

interface ImageCar {
  data: ImageCarAttributes[];
}

interface ImageCarAttributes {
  attributes: {
    formats: FormatsImage;
  };
}

interface AttributesCar {
  imageUrl: ImageCar;
  isPremium: boolean;
  isSpecialOffer: boolean;
  description: string;
  price: {
    USD: number;
    EUR: number;
    GBP: number;
  };
  discountPercent: number | null;
  ship: string;
  added: string;
  views: number;
  properties: PropertiesCar;
  inspection: InspectionCar;
}

interface PropertiesCar {
  model: string;
  color: string;
  make: string;
  vehicle_type: string;
  year: number;
  kilometers: number;
  wheels: string;
  location: string;
  export_status: boolean;
  type: string;
  gearbox: string;
  fuel: string;
  seats: number;
  cylinders: number;
  interior: string;
}

interface InspectionCar {
  isAccident: boolean;
  owner_count: number;
  isMaintenance: boolean;
}
