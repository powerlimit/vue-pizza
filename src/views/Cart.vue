<template>
  <div class="cart">
    {{selectedItems}}
    <div class="empty flex-box align-center text-center">
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
  </div>
</template>

<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import { Pizza } from '@/types';

@Component({})
export default class Cart extends Vue {
  get selectedItems(): Pizza[] {
    return this.$store.state.cart.selected;
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
.cart {
  min-height: 840px;
  &-img {
    margin-bottom: 74px;
    max-width: 100%;
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
</style>
