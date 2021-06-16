import { shallowMount, createLocalVue } from '@vue/test-utils';
import PizzaFilter from '@/components/PizzaFilter.vue';
import vClickOutside from 'v-click-outside';

const localVue = createLocalVue();
localVue.use(vClickOutside);

describe('PizzaSort.vue', () => {
  it('Emits event when clicked', async () => {
    const wrapper = shallowMount(PizzaFilter, {
      localVue,
    });
    const button = wrapper.findAll('[data-test=pizza-filter]').at(1);
    button.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('on-filter')).toBeTruthy();
  });
});
