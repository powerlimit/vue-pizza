declare module '@smartweb/vue-flash-message' {
  import { PluginFunction } from 'vue';

  export const install: PluginFunction<{}>;

  interface FlashMessage {
    success({}): void;
  }

  module 'vue/types/vue' {
    interface Vue {
      flashMessage: FlashMessage;
    }
  }
}
