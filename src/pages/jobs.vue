<template>
  <main class="py-6 bg-surface-secondary">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application',
  redirect: "/jobs/posted",
  name: "Jobs",
  children: [{
    title: "Posted Jobs",
    link: "/jobs/posted"
  }, {
    title: "Job Requisition",
    link: "/jobs/requisition"
  }]
});
</script>