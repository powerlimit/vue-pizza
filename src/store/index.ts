import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { cart } from '@/store/cart';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    cart,
  },
};

export default new Vuex.Store(store);
