import { Pizza } from '@/types';

export interface CartState {
  selected: Pizza[];
}

export interface TotalAmount {
  totalQty: number;
  totalPrice: number;
}
