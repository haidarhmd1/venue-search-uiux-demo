export interface IRestaurants {
    id: string;
    title: string;
    image: string;
    description: string;
    closed: boolean;
    address: string;
    price_range: 1 | 2 | 3 | 4;
    food_category: [];
}