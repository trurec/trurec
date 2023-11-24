<template>
  <form method="POST" action="/">

    <div class="row g-2 mb-5">
      <div class="col-md">
        <div class="form-floating">
          <input type="text" class="form-control" id="firstName" placeholder="Enter first name">
          <label for="firstName">First name</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating">
          <input type="text" class="form-control" id="lastName" placeholder="Enter last name">
          <label for="lastName">Last name</label>
        </div>
      </div>
    </div>

    <div class="form-floating mb-5">
      <input type="email" class="form-control" id="floatingInput" placeholder="Enter email address" autocomplete="">
      <label for="floatingInput">Email address</label>
    </div>

    <div class="mb-5">
      <vue-tel-input id="phone-number" class="form-control border p-3" v-model="phone" mode="national" defaultCountry="in"
        :autoFormat="true" v-on:validate="handlePhoneNumberInput"></vue-tel-input>
    </div>

    <div class="form-floating mb-5">
      <input type="password" class="form-control" id="password" v-model="password"
        v-on:input.prevent="checkPasswordStrength" placeholder="Enter password" autocomplete="new-password">
      <label for="password">Password</label>
      <div class="progress mt-2">
        <div class="progress-bar" role="progressbar" :class="progressClass" :style="{ width: progressWidth }"
          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{ passwordStrength }}</div>
      </div>
    </div>

    <div class="form-floating mb-5">
      <input type="password" class="form-control" id="confirm-password" placeholder="Enter confirm password"
        autocomplete="new-password">
      <label for="confirm-password">Confirm password</label>
    </div>

    <!-- <div class="mb-5">
      <label class="form-label" for="email">
        Full Name
      </label>
      <input class="form-control" id="email" type="email" name="email">
    </div>

    <div class="mb-5">
      <label class="form-label" for="email">
        Email
      </label>
      <input class="form-control" id="email" type="email" name="email">
    </div>

    <div class="row g-5">
      <div class="col-xl-6">
        <div class="mb-5">
          <label class="form-label" for="agency-name">
            Company Name
          </label>
          <input class="form-control" id="agency-name" type="text" name="agency-name">
        </div>
      </div>
      <div class="col-xl-6">
        <div class="mb-5">
          <label class="form-label" for="agency-name">
            Company Type
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose type...</option>
            <option>Home health care</option>
            <option>Hospice care</option>
          </select>
        </div>
      </div>
    </div> -->

    <!-- <div class="mb-5">
      <label class="form-label" for="phone-number">Phone Number</label>
      <vue-tel-input id="phone-number" class="form-control border p-2" v-model="phone" mode="national" defaultCountry="in"
        :autoFormat="true" v-on:validate="handlePhoneNumberInput"></vue-tel-input>
    </div>

    <div class="mb-5">
      <label class="form-label" for="agency-name">
        Company Website (Optional)
      </label>
      <input class="form-control" id="agency-name" type="text" name="agency-name">
    </div> -->

    <div class="my-6">
      <div class="form-check mb-5">
        <input class="form-check-input" type="checkbox" name="terms" id="checkTerms">
        <label class="form-check-label pl-2" for="checkTerms">
          By creating an account means you agree to the <a href="https://webpixels.io/terms" target="_blank"
            class="font-bold text-heading">Terms and Conditions</a>, and our
          <a href="https://webpixels.io/privacy" target="_blank" class="font-bold text-heading">Privacy Policy</a>
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
const { password, passwordStrength, progressClass, progressWidth, checkPasswordStrength } = usePasswordStrength();

const emit = defineEmits(["navigateComponent"])
const phone = ref(null);

const navigateComponent = () => {
  emit("navigateComponent")
};

const handlePhoneNumberInput = (value: string) => {
  console.log(value);
};
</script>

<style scoped>
/* Add your styling for Step 1 */
</style>
