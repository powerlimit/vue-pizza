import { shallowMount, createLocalVue } from '@vue/test-utils';
import CartItem from '@/components/CartItem.vue';
import Vuex, { Store } from 'vuex';
import { mutations } from '@/store/cart/mutations';
import { RootState } from '@/store/types';
import { PizzaFixture } from './constants';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('CartItem.vue', () => {
  let state;
  let store: Store<RootState>;

  beforeEach(() => {
    state = {
      selected: [PizzaFixture],
    };

    store = new Vuex.Store({
      state,
      mutations,
    });
  });

  it('Add one more pizza and subtract', async () => {
    const wrapper = shallowMount(CartItem, {
      propsData: {
        item: PizzaFixture,
        index: 0,
      },
      store,
      localVue,
    });
    await wrapper.find('[data-test=add-qty]').trigger('click');
    expect(wrapper.find('[data-test=item-qty]').text()).toEqual('2');
    await wrapper.find('[data-test=subtract-qty]').trigger('click');
    expect(wrapper.find('[data-test=item-qty]').text()).toEqual('1');
  });

  it('prevent subtracting if only one item in order', async () => {
    const wrapper = shallowMount(CartItem, {
      propsData: {
        item: PizzaFixture,
        index: 0,
      },
      store,
      localVue,
    });
    const button = wrapper.find('[data-test=subtract-qty]');
    await button.trigger('click');
    expect(wrapper.find('[data-test=item-qty]').text()).toEqual('1');
  });
});
