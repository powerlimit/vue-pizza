<template>
  <div class="item flex-box">
    <img :src="require(`../assets/images/${item.image}.png`)" alt="">
    <h3 class="h3 text-center">{{item.title}}</h3>
    <PizzaItemOptions
      v-on="{'dough-selected': handleDoughSelect, 'size-selected': handleSizeSelect}"
      style="margin-bottom: 17px;"
    />
    <div class="d-flex justify-between align-center">
      <strong>{{totalPrice}} ₽</strong>
      <button @click="handleAddToCart" class="clean-btn add-btn">
        + Добавить
        <span class="selected-count" v-if="selectedItem">{{selectedItem.qty}}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { Pizza, PizzaOption } from '@/types';
import { PropType } from 'vue';
import PizzaItemOptions from '@/components/PizzaItemOptions.vue';
import { DOUGH_OPTIONS, SIZE_OPTIONS } from '@/constants';

@Component({
  components: {
    PizzaItemOptions,
  },
})
export default class PizzaItem extends Vue {
  @Prop({
    type: Object as PropType<Pizza>,
    required: true,
  })
  readonly item!: Pizza

  dough = DOUGH_OPTIONS[0]

  size = SIZE_OPTIONS[0]

  get totalPrice(): string {
    return (this.item.price * this.dough.multiplier * this.size.multiplier).toFixed(2);
  }

  get selectedItem(): Pizza {
    return this.$store.getters.getSelectedPizzaById(this.item.id);
  }

  handleDoughSelect(val: PizzaOption): void {
    this.dough = val;
  }

  handleSizeSelect(val: PizzaOption): void {
    this.size = val;
  }

  handleAddToCart(): void {
    this.$store.commit('ADD_TO_CART', {
      ...this.item,
      size: this.size,
      dough: this.dough,
      qty: 1,
    });
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
.item {
  margin-top: 30px;
  padding: 35px 17.5px;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
}
.h3 {
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 20px;
}

.selected-count {
  display: inline-block;
  width: 22px;
  line-height: 22px;
  background: $primary;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #ffffff;
  transition: all .3s ease;
  margin-left: 3px;
}

.add-btn {
  border-radius: $btn-border-radius;
  height: 40px;
  line-height: 40px;
  border: 1px solid $primary;
  font-weight: bold;
  padding: 0 17px;
  color: $primary;
  transition: all .3s ease;
  &:hover {
    background: $primary;
    color: #fff;
    .selected-count {
      color: $primary;
      background: #fff;
    }
  }
}
</style>
