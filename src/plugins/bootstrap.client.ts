import * as bootstrap from "bootstrap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("bootstrap", bootstrap);

  new bootstrap.Popover(document.body, {
    selector: '[data-bs-toggle="popover"]',
  });
});
