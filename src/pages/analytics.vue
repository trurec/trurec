<template>
  <main class="py-6 bg-surface-secondary">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application',

  redirect: "/analytics/company",

  module: "Analytics",

  children: [{
    title: "Company Analytics",
    link: "/analytics/company"
  }, {
    title: "Job Analytics",
    link: "/analytics/job"
  }, {
    title: "User Analytics",
    link: "/analytics/user"
  }]
});
</script>