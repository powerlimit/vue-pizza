<template>
  <div class="top-bar d-flex align-center justify-between">
    <router-link to="/" class="d-flex home-link">
      <img src="../assets/images/logo.svg" class="logo" alt="">
      <div>
        <strong class="title">VUE PIZZA</strong>
        <span>самая вкусная пицца во&nbsp;вселенной</span>
      </div>
    </router-link>
    <router-link :to="{name: 'Cart'}" class="btn-cart">
      <span class="total">{{total.price}} ₽</span>
      <span><img src="../assets/images/shopping-cart.svg" alt=""> {{total.qty}}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import PizzaItemOptions from '@/components/PizzaItemOptions.vue';
import { TotalAmount } from '@/store/cart/types';

@Component({
  components: {
    PizzaItemOptions,
  },
})
export default class TopBar extends Vue {
  get total(): TotalAmount {
    return this.$store.getters.getTotal;
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.top-bar {
  padding: 54px 38px 35px 77px;
  border-bottom: 1px solid $muted;
  @include media-breakpoint-down(xl) {
    padding: 30px;
  }

  @include media-breakpoint-down(sm) {
    padding: 15px;
  }
}
.home-link {
  text-decoration: none !important;
  span {
    font-size: 16px;
    line-height: 19px;
    color: #7B7B7B;
  }
}
.logo {
  margin-right: 17px;
}
.title {
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #181818;
  display: block;
}
.btn-cart {
  height: 50px;
  background: $primary;
  border-radius: $btn-border-radius;
  padding: 15px 0;
  color: #ffffff;
  text-decoration: none !important;
  line-height: 20px;
  font-weight: 700;
  white-space: nowrap;
  span {
    display: inline-block;
    padding: 0 15px;
    &.total {
      border-right: 1px solid #fff;
    }
  }
  img {
    transform: translateY(3px);
  }
}
</style>
