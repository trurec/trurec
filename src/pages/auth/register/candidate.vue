<template>
  <form method="POST" action="/">
    <div class="row g-5">
      <div class="col-xl-6">
        <div class="mb-5">
          <label class="form-label" for="first_name">
            First Name
          </label>
          <input class="form-control" id="first_name" type="text" name="first_name">
        </div>
      </div>
      <div class="col-xl-6">
        <div class="mb-5">
          <label class="form-label" for="last_name">
            Last Name
          </label>
          <input class="form-control" id="last_name" type="text" name="last_name">
        </div>
      </div>
    </div>

    <div class="mb-5">
      <label class="form-label" for="email">
        Email
      </label>
      <input class="form-control" id="email" type="email" name="email">
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div>
          <label class="form-label" for="password">
            Password
          </label>
          <input class="form-control" id="password" type="password" name="password">
        </div>
      </div>
    </div>

    <div class="my-6">
      <div class="form-check mb-5">
        <input class="form-check-input" type="checkbox" name="terms" id="checkTerms">
        <label class="form-check-label pl-2" for="checkTerms">
          By creating an account means you agree to the <a href="https://webpixels.io/terms"
          target="_blank" class="font-bold text-heading">Terms and Conditions</a>, and our
          <a href="https://webpixels.io/privacy" target="_blank"
          class="font-bold text-heading">Privacy Policy</a>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="newsletter" id="checkNewsletter">
        <label class="form-check-label pl-2" for="checkNewsletter">
          Send me email with hot tips, awesome news, or both.
        </label>
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-between mt-6">
      <button type="submit" class="btn btn-secondary btn-sm" v-on:click.prevent="navigateComponent">
        <BootstrapIcon name="arrow-left" class="me-2" />
        Back
      </button>
      <button type="submit" class="btn btn-primary">
        Register
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['navigateComponent'])

const navigateComponent = () => {
  emit('navigateComponent', 'account')
};
</script>

<style scoped>
/* Add your styling for Step 1 */
</style>
