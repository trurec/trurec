<template>
  <div>
    <NuxtLoadingIndicator color="#5B72FF" :throttle="100" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const updateTimestamp = ref<string>("1699355492");

onMounted(() => {
  checkLocale();
  checkForUpdate();
  nextTick(() => {
    /* Prevent the default context menu from appearing on right-click */
    window.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    });
  });
});

const checkLocale = () => {
  // Get access to the Nuxt app
  const nuxtApp = useNuxtApp();

  // Retrieve the locale from local storage
  const locale: string | null = localStorage.getItem("trurec.locale");

  // Check if a locale exists in local storage
  if (locale) {
    // Set the locale in the app's i18n module
    nuxtApp.$i18n.locale.value = locale;
  } else {
    // Set the locale to default
    nuxtApp.$i18n.locale.value = "en";
  }
};


const checkForUpdate = () => {
  // Retrieve the last update timestamp from Local Storage
  const lastUpdatedTimestamp: string | null = localStorage.getItem("trurec.updateTimestamp");

  // Check if the current update timestamp matches the last stored timestamp
  if (updateTimestamp.value === lastUpdatedTimestamp) {
    // If they match, no update is available
    console.log("No update available");
  } else {
    // If they don"t match, update the timestamp and trigger a hard reload
    localStorage.setItem("trurec.updateTimestamp", updateTimestamp.value);

    // Perform a hard reload to apply the updates and refresh the page
    location.reload();

    // Log a message indicating that updates are being applied
    console.log("Applied the updates...");
  }
};
</script>
