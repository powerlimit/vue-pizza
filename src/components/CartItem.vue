<template>
  <div class="cart-item">
    <img :src="require(`../assets/images/${item.image}.png`)" alt="">
    <div class="cart-item-text">
      <h3 class="h3">{{item.title}}</h3>
      <p class="p">{{item.dough.title}} тесто, {{item.size.title}}см.</p>
    </div>
    <div class="change-qty-wrap col">
      <button data-test="subtract-qty" class="btn-clean btn change-qty" @click="subtractQty">
        <img src="../assets/images/minus.svg" alt="">
      </button>
      <span data-test="item-qty">{{item.qty}}</span>
      <button data-test="add-qty" class="btn-clean btn change-qty" @click="addQty">
        <img src="../assets/images/plus.svg" alt="">
      </button>
    </div>
    <div class="col text-center">
      <p class="">{{amount.toFixed(2)}} ₽</p>
    </div>
    <button class="btn-clean btn cancel" @click="handleRemoveFromCart">
      <img src="../assets/images/close.svg" alt="">
    </button>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { Pizza } from '@/types';
import { PropType } from 'vue';

@Component({})
export default class CartItem extends Vue {
  @Prop({
    type: Object as PropType<Pizza>,
    required: true,
  })
  readonly item: Pizza

  @Prop({
    type: Number,
    required: true,
  })
  readonly index: number

  get amount(): number {
    const {
      qty, price, size, dough,
    } = this.item;
    return qty * price * size.multiplier * dough.multiplier;
  }

  addQty(): void {
    this.$store.commit('INCREASE_QTY', this.index);
  }

  subtractQty(): void {
    this.$store.commit('SUBTRACT_QTY', this.index);
  }

  handleRemoveFromCart(): void {
    const confirmed = confirm('Вы действительно хотите удалить пиццу с заказа');
    if (confirmed) {
      this.$store.commit('REMOVE_ITEM', this.index);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

img {
  width: 80px;
  height: auto;
  margin-right: 15px;
  @include media-breakpoint-down(sm) {
    flex-basis: 25%;
    margin-bottom: 30px;
  }
}

.p {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #8D8D8D;
  font-weight: 400;
}
.cart-item {
  display: flex;
  align-items: center;
  border-top: 1px solid #F4F4F4;
  padding-top: 30px;
  margin-top: 30px;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  @include media-breakpoint-down(sm) {
    flex-wrap: wrap;
  }
  &-text {
    flex-basis: 50%;
    @include media-breakpoint-down(lg) {
      flex-basis: 33%;
    }
    @include media-breakpoint-down(sm) {
      flex-basis: 70%;
      margin-bottom: 30px;
    }
  }
}
.btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  transition: all .3s ease;
  &:hover {
    background: rgba($primary, .3);
    box-shadow: 0 3px 3px rgba(#D0D0D0, .8);
  }
  img {
    width: 15px;
    margin: auto;
  }
}
.cancel {
  border: 2px solid #D0D0D0;
  &:hover {
    background: rgba(#D0D0D0, .3);
  }
}
.change-qty {
  width: 32px;
  height: 32px;
  border: 2px solid $primary;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: inline-flex;
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      width: 40px;
      text-align: center;
      font-weight: bold;
      font-size: 22px;
    }
  }
  img {
    width: 15px;
    margin: auto;
  }
}
</style>
