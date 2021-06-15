import { MutationTree } from 'vuex';
import { CartState } from '@/store/cart/types';
import { Pizza } from '@/types';

export const mutations: MutationTree<CartState> = {
  ADD_TO_CART(state, payload: Pizza) {
    const idx = state.selected.findIndex((p) => p.id === payload.id);
    if (idx >= 0) {
      state.selected[idx].qty++;
    } else {
      state.selected.push(payload);
    }
  },
};
