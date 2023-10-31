<template>
	<div class="d-flex flex-column flex-center flex-column-fluid min-vh-100">
		<img src="~/assets/images/svg/404.svg" alt="404" class="mw-100 h-lg-250px">
		<h1 class="display-1 text-primary fw-bold mb-10">{{ error?.statusCode }}</h1>
		<h1 class="display-4 text-secondary fw-bold mb-10">{{ error?.message }}</h1>
		<a href="#" class="btn btn-primary" v-on:click.prevent="handleError">Go To Dashboard</a>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'error'
});

const props = defineProps({
	error: Object,
});


const error = useError();

if (error.value.statusCode === 404) {
	error.value.message = 'Oops! Page not found';
}

if (error.value.statusCode === 500) {
	error.value.message = 'Oops! Something went wrong';
}

const handleError = () => clearError({ redirect: '/dashboard' });
</script>