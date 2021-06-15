<template>
  <div class="container">
    <TopBar />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '../TopBar.vue';

export default Vue.extend({
  name: 'MainLayout',
  components: {
    TopBar,
  },
});
</script>

<style scoped lang="scss">
  .container {
    max-width: 1340px;
    background: #FFFFFF;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    min-height: 840px;
  }
  .content {
    padding: 40px 38px 35px 77px;
  }
</style>
