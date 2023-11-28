<template>
    <div class="col-12 col-md-9 col-lg-7 offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
        <div class="row">
            <div class="col-md-9 col-lg-10 col-xl-8 mx-auto ms-xl-0">
                <!-- Logo -->
                <a class="navbar-brand d-flex w-full d-lg-none" href="/">
                    <div class="w-md-auto text-dark">
                        <img src="~/assets/images/logos/logo.svg" class="w-auto h-8" alt="logo" />
                    </div>
                </a>

                <div class="mt-10 mt-lg-5 mb-6">
                    <h1 class="lh-tight ls-tighter font-bolder h2 font-bolder">
                        Register for Trurec
                    </h1>
                </div>

                <span class="clearfix"></span>

                <form method="POST" action="/">
                    <div class="row g-2 mb-5">
                        <div class="col-md">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="firstName" placeholder="Enter first name" />
                                <label for="firstName">First name</label>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="lastName" placeholder="Enter last name" />
                                <label for="lastName">Last name</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-floating mb-5">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Enter email address" autocomplete="" />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="mb-5">
                        <vue-tel-input id="phone-number" class="form-control border p-3" v-model="phone" mode="national" defaultCountry="in" :autoFormat="true" v-on:validate="handlePhoneNumberInput"></vue-tel-input>
                    </div>

                    <div class="form-floating mb-5">
                        <input type="password" class="form-control" id="password" v-model="password" v-on:input.prevent="checkPasswordStrength" placeholder="Enter password" autocomplete="new-password" />
                        <label for="password">Password</label>
                        <button type="button" class="btn-password-toggle" v-on:click.prevent="togglePasswordVisibility" aria-label="visibility">
                            <BootstrapIcon id="password-eye-icon" name="eye-slash" />
                        </button>
                        <div v-show="password" class="progress mt-2">
                            <div class="progress-bar" role="progressbar" :class="progressClass" :style="{ width: progressWidth }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{ passwordStrength }}</div>
                        </div>
                    </div>

                    <div class="form-floating mb-5">
                        <input type="password" class="form-control" id="confirm-password" placeholder="Enter confirm password" autocomplete="new-password" />
                        <label for="confirm-password">Confirm password</label>
                    </div>

                    <div class="my-6">
                        <div class="form-check mb-5">
                            <input class="form-check-input" type="checkbox" name="terms" id="checkTerms" />
                            <label class="form-check-label pl-2" for="checkTerms">
                                By creating an account means you agree to the <a href="https://webpixels.io/terms" target="_blank" class="font-bold text-heading">Terms and Conditions</a>, and our
                                <a href="https://webpixels.io/privacy" target="_blank" class="font-bold text-heading">Privacy Policy</a>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="newsletter" id="checkNewsletter" />
                            <label class="form-check-label pl-2" for="checkNewsletter">
                                Send me email with hot tips, awesome news, or both.
                            </label>
                        </div>
                    </div>

                    <div class="d-flex align-items-center justify-content-end mt-6">
                        <button type="submit" class="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>

                <div class="py-5 text-center">
                    <span class="text-xs text-uppercase font-semibold">or</span>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#" class="btn btn-neutral w-full">
                            <span class="icon icon-sm pe-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12   s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20    s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039   l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571   c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                            </span>
                            Google
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="#" class="btn btn-neutral w-full">
                            <span class="icon icon-sm pe-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                                    <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            </span>
                            Linkedin
                        </a>
                    </div>
                </div>

                <div class="my-6">
                    <small>Already have an account?</small>
                    <NuxtLink to="/auth/login" class="text-primary small font-bold">
                        Login
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { password, passwordStrength, progressClass, progressWidth, checkPasswordStrength, togglePasswordVisibility } = usePassword();

const phone = ref(null);

const handlePhoneNumberInput = (value: string) => {
  console.log(value);
};

definePageMeta({
    layout: "auth",
});
</script>

<style lang="scss" scoped>
.btn-password-toggle {
    top: 16px;
    right: 12px;
    background: none;
    position: absolute;
    color: var(--x-primary);
}
</style>