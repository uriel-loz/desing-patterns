export interface Products {
    products: Product[];
}

export interface Product {
    id:          number;
    name:        string;
    category:    string;
    price:       number;
    currency:    string;
    stock:       number;
    description: string;
    features:    Features;
    sku:         string;
}

export interface Features {
    battery_life_hours?: number;
    weight_g?:           number;
    available_colors?:   string[];
    capacity_liters?:    number;
    material?:           string;
    compartments?:       number;
    resolution_mp?:      number;
    optical_zoom?:       string;
    video_quality?:      string;
    capacity_ml?:        number;
    dishwasher_safe?:    boolean;
    colors?:             string[];
    sizes?:              string[];
    pages?:              number;
    language?:           string;
    format?:             string;
}
