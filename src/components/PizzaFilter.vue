<template>
  <ul class="d-flex">
    <li v-for="option in filterOptions" :key="option.label">
      <button
        data-test="pizza-filter"
        :class="{selected: (selectedOption.value === option.value)}"
        class="filter-btn"
        @click="setFilter(option)"
      >{{ option.label }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  Component, Vue, Emit,
} from 'vue-property-decorator';
import { FILTER_OPTIONS } from '@/constants';
import { FilterOption } from '@/types';

@Component({})
export default class PizzaFilter extends Vue {
  filterOptions = FILTER_OPTIONS;

  selectedOption = FILTER_OPTIONS[0];

  @Emit('on-filter')
  setFilter(val: FilterOption): void {
    this.selectedOption = val;
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.filter-btn {
  border: 0;
  background: $muted;
  border-radius: $btn-border-radius;
  padding: 15px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: darken($muted, 10%);
  }

  &.selected {
    background: $body-color;
    color: #ffffff;
  }
}

li {
  margin-right: 9px;
}
</style>
