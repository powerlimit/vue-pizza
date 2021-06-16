<template>
  <div>
    <div class="d-flex align-center justify-between">
      <PizzaFilter @on-filter="handleFilter" />
      <PizzaSort @on-sort="handleSort" />
    </div>
    <h1 class="h1" style="margin-top: 32px;">Все пиццы</h1>
    <div class="placeholder" v-if="loading">
      Загрузка...
    </div>
    <div class="placeholder" v-else-if="!filtered.length">
      Нет доступных товаров
    </div>
    <div class="grid" v-else>
      <PizzaItem
        v-for="item in filtered"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import ApiService from '@/serveces/ApiService';
import PizzaItem from '@/components/PizzaItem.vue';
import { cloneDeep } from 'lodash';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/constants';
import { FilterOption, Pizza, PizzaSortFields } from '@/types';
import PizzaFilter from '../components/PizzaFilter.vue';
import PizzaSort from '../components/PizzaSort.vue';

@Component({
  components: {
    PizzaFilter,
    PizzaSort,
    PizzaItem,
  },
})
export default class Home extends Vue {
  filterOption: FilterOption = FILTER_OPTIONS[0];

  sortOption: FilterOption = SORT_OPTIONS[0];

  items:Pizza[] = [];

  filtered:Pizza[] = [];

  loading = true;

  handleFilter(val: FilterOption): void {
    this.filterOption = val;
    this.filterItems();
  }

  handleSort(val: FilterOption): void {
    this.sortOption = val;
    this.filterItems();
  }

  filterItems(): void {
    let items = cloneDeep(this.items);
    if (this.filterOption.value) {
      items = items.filter((i: Pizza) => i.type === this.filterOption.value);
    }
    const sortField = this.sortOption.value as keyof PizzaSortFields;
    if (sortField) {
      items = items.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
    }
    this.filtered = items;
  }

  created(): void {
    this.$Progress.start();
    ApiService.getItems()
      .then((res) => {
        this.loading = false;
        this.items = res.data;
        this.filterItems();
        this.$Progress.finish();
      }).catch();
  }
}
</script>

<style scoped lang="scss">

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
}

.placeholder {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
}
</style>
