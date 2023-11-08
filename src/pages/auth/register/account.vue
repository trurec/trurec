<template>
  <section>
    <div class="pb-10 pb-lg-15">
      <h4 class="d-flex align-items-center text-gray-900">
        Choose Account Type
        <a href="#" class="text-sm text-muted text-primary-hover font-semibold me-2 d-none d-md-block ms-1"
        data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top"
        data-bs-content="Choose your account type to get started. Are you an agency looking to hire or a candidate seeking opportunities?">
        <BootstrapIcon name="exclamation-circle-fill" />
      </a>
    </h4>

    <div class="text-muted small">
      If you need more info, please check out
      <a href="#" class="link-primary">Help Page</a>.
    </div>
  </div>

  <div class="position-relative">
    <div class="row">
      <div class="col-lg-6 my-2">
        <input type="radio" class="btn-check" name="account_type" v-model="account" value="agency" id="account-type-agency">
        <label class="btn btn-outline-light border border-dashed p-6 d-flex align-items-center mb-10" for="account-type-agency">
          <BootstrapIcon name="building-fill" class="text-muted me-5" />
          <span class="text-gray-900 d-block">
            Agency
          </span>
        </label>
      </div>

      <div class="col-lg-6 my-2">
        <input type="radio" class="btn-check" name="account_type" v-model="account" value="candidate" id="account-type-candidate">
        <label class="btn btn-outline-light border border-dashed p-6 d-flex align-items-center mb-10" for="account-type-candidate">
          <BootstrapIcon name="person-circle" class="text-muted me-5" />
          <span class="text-gray-900 d-block">
            Candidate
          </span>
        </label>
      </div>
    </div>
  </div>

  <div class="d-flex align-items-center justify-content-end">
    <button type="button" class="btn btn-primary btn-sm" v-on:click.prevent="navigateComponent">
      Continue
      <BootstrapIcon name="arrow-right" class="ms-2" />
    </button>
  </div>
</section>
</template>

<script setup lang="ts">
const account = ref<String>("agency");

const emit = defineEmits(['navigateComponent'])

const navigateComponent = () => {
  emit('navigateComponent', account.value)
};
</script>

<style lang="scss" scoped>
input[type="radio"]:checked+label {
  background-color: rgba(var(--x-surface-secondary-rgb), 1);
  border: var(--x-border-width) var(--x-border-style) var(--x-primary) !important;

  i,
  span {
    color: rgba(var(--x-primary-rgb), var(--x-text-opacity)) !important;
  }
}
</style>
