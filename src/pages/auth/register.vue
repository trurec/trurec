<template>
    <div
        class="col-12 col-md-9 col-lg-7 offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
        <div class="row">
            <div class="col-md-9 col-lg-10 col-xl-8 mx-auto ms-xl-0">

                <!-- Logo -->
                <a class="navbar-brand d-flex w-full d-lg-none" href="/">
                    <div class="w-md-auto text-dark">
                        <img src="~/assets/images/logos/logo.svg" class="w-auto h-8" alt="logo">
                    </div>
                </a>

                <div class="mt-10 mt-lg-5 mb-6">
                    <h1 class="lh-tight ls-tighter font-bolder h2 font-bolder">
                        Let's get started...
                    </h1>
                </div>

                <span class="clearfix"></span>

                <transition name="page" mode="out-in">
                    <component :is="currentComponent" @navigateComponent="navigateComponent" />
                </transition>

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
import account from "./register/account.vue";
import agency from "./register/agency.vue";
import candidate from "./register/candidate.vue";

definePageMeta({
    layout: "auth",
});

const dynamicComponents = {
    account,
    agency,
    candidate
}

const currentComponent = shallowRef<Object>(dynamicComponents.account);

const navigateComponent = (component: String = "account") => {
    if (dynamicComponents[component]) {
        currentComponent.value = dynamicComponents[component];
    }
};
</script>