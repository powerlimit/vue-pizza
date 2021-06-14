export interface Pizza {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  frequency: number;
}

export interface PizzaOption {
  title: string;
  multiplier: number;
}

export interface FilterOption {
  label: string;
  value: string;
}
