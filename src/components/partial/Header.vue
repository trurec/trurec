<template>
	<header class="bg-surface-primary border-bottom pt-6">
		<div class="container-fluid">
			<div class="mb-npx">
				<div class="row align-items-center">
					<div class="col-sm-6 col-12 mb-4 mb-sm-0">
						<h1 class="h2 mb-0 ls-tight">{{ route?.meta?.name }}</h1>
					</div>
					
					<div class="col-sm-6 col-12 text-sm-end">
						<div class="mx-n1">
							<a href="#" class="btn d-inline-flex btn-sm btn-neutral mx-1">
								<span class=" pe-2">
									<i class="bi bi-pencil"></i>
								</span>
								<span>Edit</span>
							</a>
							<a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
								<span class=" pe-2">
									<i class="bi bi-plus"></i>
								</span>
								<span>Create</span>
							</a>
						</div>
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
const route = useRoute();

const children: ComputedRef<Array> = computed(() => {
	return route?.meta?.children ?? [];
})
</script>