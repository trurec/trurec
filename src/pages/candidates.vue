<template>
  <main class="py-6 bg-surface-secondary">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application',
  redirect: "/candidates/applicants",
  name: "Candidates",
  children: [{
    title: "Applicants",
    link: "/candidates/applicants"
  }, {
    title: "Groups",
    link: "/candidates/groups"
  }]
});
</script>