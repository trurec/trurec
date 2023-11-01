<template>
	<header class="bg-surface-primary border-bottom pt-2">
		<div class="container-fluid">
			<div class="mb-npx">
				<div class="d-flex align-items-center">
					<div class="mb-2 mb-sm-0">
						<h1 class="h2 mb-0 ls-tight">{{ route?.meta?.module }}</h1>
					</div>
				</div>

				<ul class="nav nav-tabs mt-4 overflow-x border-0">
					<template v-for="(child, index) in children" :key="index">
						<li class="nav-item ">
							<NuxtLink :to="child.link" class="nav-link" exact exact-active-class="active">
								{{ child.title }}
							</NuxtLink>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import type { Children } from './types';

const route = useRoute();

const children: ComputedRef<Children[]> = computed(() => {
	return (route?.meta?.children as Children[]) ?? [];
});
</script>