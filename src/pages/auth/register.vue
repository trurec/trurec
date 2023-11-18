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
// Import the DynamicComponents type from "~/types/auth"
import type { DynamicComponents } from "~/types/auth";

// Import Vue components for dynamic use
import Account from "./register/account.vue";
import Agency from "./register/agency.vue";
import Candidate from "./register/candidate.vue";

// Define an object to store dynamic components
const dynamicComponents: DynamicComponents = {
    account: Account,
    agency: Agency,
    candidate: Candidate
};

// Use shallowRef to create a reactive reference to the current component
const currentComponent = shallowRef<Object>(dynamicComponents.account as Object);

// Function to navigate to a different component
const navigateComponent = (component: string = "account") => {
    // Retrieve the selected component based on the provided component name
    const selectedComponent = dynamicComponents[component];

    // If the selected component exists, update the currentComponent value
    if (selectedComponent) {
        currentComponent.value = selectedComponent;
    }
};

// Define the page meta information
definePageMeta({
    layout: "auth", // Set the layout for the authentication page
});
</script>