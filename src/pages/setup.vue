<template>
  <main class="py-6 bg-surface-secondary">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application',

  redirect: "/setup/workflow",

  module: "Setup",

  children: [{
    title: "Workflow",
    link: "/setup/workflow"
  }, {
    title: "Roles",
    link: "/setup/roles"
  }, {
    title: "Permissions",
    link: "/setup/permissions"
  }, {
    title: "Team Members",
    link: "/setup/team"
  }, {
    title: "Forms",
    link: "/setup/forms"
  }, {
    title: "Templates",
    link: "/setup/templates"
  }]
});
</script>