<template>
  <div class="cart">
    <div class="empty flex-box align-center text-center" v-if="!selectedItems.length">
      <h1 class="h1 d-flex align-center">
        Корзина пустая&nbsp;<img src="../assets/images/smile.png" alt="">
      </h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img class="cart-img" src="../assets/images/cart-empty.svg" alt="">
      <router-link class="back-btn" to="/">Вернуться назад</router-link>
    </div>
    <div class="cart-body">
      <div class="d-flex align-center justify-between">
        <h1 class="h1">
          <img src="../assets/images/iconfinder_shopping-cart.svg" alt="">&nbsp;
          Корзина
        </h1>
        <button class="clean-btn clear-cart-btn" @click="handleClearCart">
          <img src="../assets/images/trash.svg" alt=""> Очистить корзину
        </button>
      </div>
      <CartItem
        v-for="(item, idx) in selectedItems"
        :key="item.id"
        :item="item"
        :index="idx"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import { Pizza } from '@/types';
import CartItem from '@/components/CartItem.vue';

@Component({
  components: { CartItem },
})
export default class Cart extends Vue {
  get selectedItems(): Pizza[] {
    return this.$store.state.cart.selected;
  }

  handleClearCart(): void {
    const confirmed = confirm('Вы действительно хотите очистить корзину?');
    if (confirmed) {
      this.$store.commit('CLEAR_CART');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
.cart {
  &-img {
    margin-bottom: 74px;
    max-width: 100%;
  }
  &-body {
    max-width: 820px;
    margin: auto;
  }
}
.empty {
  padding-top: 160px;
}
p {
  margin-top: 10px;
  margin-bottom: 45px;
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
}

.back-btn {
  background: $dark;
  color: #ffffff;
  text-decoration: none !important;
  font-weight: 700;
  padding: 14px 20px;
  border-radius: $btn-border-radius;
  transition: background-color .3s ease;
  &:hover {
    background: lighten($dark, 10%);
  }
}

.clear-cart-btn {
  color: #B6B6B6;
  display: flex;
  align-items: center;
}
</style>
