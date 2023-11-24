import "vue-tel-input/vue-tel-input.css";
import { VueTelInput } from "vue-tel-input";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueTelInput", VueTelInput);
});
