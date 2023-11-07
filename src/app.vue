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
  checkForUpdate();
  nextTick(() => {
    /* Prevent the default context menu from appearing on right-click */
    window.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    });
  });
});

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
    location.reload(true);

    // Log a message indicating that updates are being applied
    console.log("Applying the updates...");
  }
}
</script>
