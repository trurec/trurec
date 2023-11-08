<template>
    <div class="px-5 py-5 p-lg-0 h-screen">
        <div class="d-flex justify-content-center">
            <div
                class="col-lg-5 col-xl-4 p-12 p-xl-7 position-fixed start-0 top-0 h-screen overflow-y-hidden d-none d-lg-flex flex-column">
                <div class="d-lg-flex flex-column w-full h-full p-16 bg-surface-secondary rounded-5">
                    
                    <NuxtLink to="/" class="d-block">
                        <div class="w-md-auto  text-dark">
                            <img src="~/assets/images/logos/logo.svg" class="w-auto h-16" alt="logo">
                        </div>
                    </NuxtLink>

                    <div class="mt-10 mt-xl-24">
                        <h1 class="lh-tight ls-tighter font-bolder display-5">
                            Your Trurec, Your Way.
                        </h1>
                    </div>
                </div>
            </div>

            <slot></slot>
        </div>
    </div>
</template>