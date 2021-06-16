<template>
  <div class="position-relative" v-click-outside="hideMenu">
    <button
      @click="isMenuShown = true"
      class="btn-clean btn-select"
    >
      {{ selectedOption.label }}
    </button>
    <ul class="filter-list" :class="{showed: isMenuShown}">
      <li v-for="option in filterOptions" :key="option.label">
        <button
          data-test="pizza-filter"
          :class="{selected: (selectedOption.value === option.value)}"
          class="btn-filter"
          @click="setFilter(option)"
        >{{ option.label }}
        </button>
      </li>
    </ul>
  </div>
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

  isMenuShown = false;

  @Emit('on-filter')
  setFilter(val: FilterOption): void {
    this.selectedOption = val;
    this.hideMenu();
  }

  hideMenu():void {
    this.isMenuShown = false;
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.btn-filter {
  border: 0;
  background: $muted;
  border-radius: $btn-border-radius;
  padding: 15px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s ease;
  @include media-breakpoint-down(lg) {
    background-color: transparent;
    width: 100%;
    display: block;
    border-radius: 0;
  }

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
  @include media-breakpoint-down(lg) {
    margin-right: 0;
    border-top: 1px solid $dark;
    background: #ffffff;
  }
}

.filter-list {
  display: flex;
  @include media-breakpoint-down(lg) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    padding: 10px 0;
  }
  &.showed {
    display: block;
  }
}

.btn-select {
  color: $primary;
  border-bottom: 2px dotted $primary;
  font-size: 18px;
  font-weight: 500;
  @include media-breakpoint-up(lg) {
    display: none;
  }
}
</style>
