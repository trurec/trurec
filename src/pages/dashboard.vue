<template>
  <main class="py-6 bg-surface-secondary">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application',
  redirect: "/dashboard/overview",
  name: "Dashboard",
  children: [{
    title: "Overview",
    link: "/dashboard/overview"
  }, {
    title: "Calender",
    link: "/dashboard/calender"
  }]
});
</script>