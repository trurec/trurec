<template>
  <div>
    <NuxtLoadingIndicator color="#3083DC" :throttle="2000" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  nextTick(() => {
    /* Prevent the default context menu from appearing on right-click */
    window.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    });
  });
});
</script>
