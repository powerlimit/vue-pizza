<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <flash-message position="right top" strategy="multiple"></flash-message>
    <MainLayout>
      <router-view/>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainLayout from '@/components/layouts/MainLayout.vue';

export default Vue.extend({
  components: {
    MainLayout,
  },
});
</script>

<style lang="scss">
@import "assets/scss/variables";
#app {
  background: $body-bg;
  min-height: 100vh;
  padding: 45px;
}
</style>
