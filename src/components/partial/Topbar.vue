<template>
	<nav class="navbar navbar-light position-lg-sticky top-lg-0 d-none d-lg-block overlap-10 flex-none bg-white border-bottom px-0 py-2"
		id="topbar">
		<div class="container-fluid">

			<div class="d-flex align-items-center">
				<button id="sidebar-toggler" ref="sidebarToggler" type="button" class="btn btn-link p-0">
					<BootstrapIcon id="iconToggle" name="arrow-left-circle-fill" class="text-secondary" />
				</button>

				<div class="dropdown ms-6">
					<form class="form-inline me-4 d-none d-md-flex">
						<div class="input-group input-group-inline shadow-none">
							<span class="input-group-text border-0 shadow-none ps-0 pe-3">
								<BootstrapIcon name="search" />
							</span>
							<input type="text" class="form-control form-control-flush" :placeholder="`${$t('search')}...`"
								aria-label="Search" id="dropdown-search" data-bs-toggle="dropdown" aria-expanded="false"
								data-bs-auto-close="outside" />
							<div class="dropdown-menu dropdown-menu-start px-2" aria-labelledby="dropdown-search">
								<div class="dropdown-item d-flex align-items-center justify-content-between">
									<h6 class="dropdown-header p-0 m-0 font-semibold">Recently Searched</h6>
									<div class="dropdown">
										<button class="btn btn-link text-sm font-semibold ms-auto pe-0" type="button"
											id="search-preferences" data-bs-toggle="dropdown">
											<BootstrapIcon name="gear" />
										</button>
										<div class="dropdown-menu" aria-labelledby="search-preferences">
											<a class="dropdown-item" href="#">Nested Item 1</a>
											<a class="dropdown-item" href="#">Nested Item 2</a>
											<a class="dropdown-item" href="#">Nested Item 3</a>
										</div>
									</div>
								</div>
								<template v-for="(search, index) in 5" :key="index">
									<div class="dropdown-item py-3 d-flex">
										<div class="flex-fill">
											<div class="text-sm lg-snug w-64 text-wrap">
												Robert sent a message to Webpixels
											</div>
											<span class="text-muted text-xs">3{{ index + search }} mins ago</span>
										</div>
									</div>
								</template>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div class="navbar-top d-none d-sm-block">
				<div class="hstack gap-3 ms-4">
					<div class="dropdown">
						<a href="#" class="text-primary-hover text-opacity-100-hover text-uppercase font-semibold px-2"
							role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
							{{ locale }}
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<a v-for="(value, key) in locales" :key="key" class="dropdown-item text-uppercase" href="#"
								@click.prevent="setLocale(value)">
								{{ value }}
							</a>
						</div>
					</div>
					<div class="dropdown">
						<a href="#" class="px-2 text-base text-primary-hover text-opacity-70 text-opacity-100-hover"
							role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
							<BootstrapIcon name="bell-fill" />
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<div class="dropdown-item d-flex align-items-center">
								<h6 class="dropdown-header p-0 m-0 font-semibold">Notifications</h6>
								<a href="#" class="text-sm font-semibold ms-auto">Clear all</a>
							</div>
							<div class="dropdown-item py-3 d-flex">
								<div>
									<div class="avatar bg-tertiary text-white rounded-circle">RF</div>
								</div>
								<div class="flex-fill ms-3">
									<div class="text-sm lg-snug w-64 text-wrap">
										<a href="#" class="font-semibold text-heading text-primary-hover">Robert</a> sent a
										message to <a href="#"
											class="font-semibold text-heading text-primary-hover">Webpixels</a>
									</div>
									<span class="text-muted text-xs">30 mins ago</span>
								</div>
							</div>
							<div class="dropdown-divider"></div>
							<div class="dropdown-item py-2 text-center">
								<a href="#" class="font-semibold text-muted text-primary-hover">View all</a>
							</div>
						</div>
					</div>
					<div class="dropdown">
						<a href="#" class="px-2 text-base text-primary-hover text-opacity-70 text-opacity-100-hover"
							role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
							<BootstrapIcon name="question-circle-fill" />
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<div class="dropdown-header">
								<span class="d-block text-heading font-bold">Help</span>
							</div>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">
								<BootstrapIcon name="chat-dots" class="me-3" /> Help Center
							</a>
							<a class="dropdown-item" href="#">
								<BootstrapIcon name="telephone-inbound" class="me-3" /> Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const { sidebarToggler } = useSidebarToggle();

const setLocale = (locale: string) => {
	const nuxtApp = useNuxtApp();
	nuxtApp.$i18n.locale.value = locale;
	localStorage.setItem("trurec.locale", locale);
}

onMounted(() => {
	// const sidebarToggler: HTMLElement | null = document.querySelector("#sidebar-toggler");
	// const sidebar: HTMLElement | null = document.querySelector("#sidebar");
	// const iconToggle: HTMLElement | null = document.querySelector("#iconToggle");

	// sidebarToggler?.addEventListener("click", () => {
	// 	sidebar?.classList.toggle("d-none");
	// 	Array.from(sidebarToggler?.children).forEach((child: Element) => {
	// 		child.classList.toggle('bi-arrow-left-circle-fill');
	// 		child.classList.toggle('bi-arrow-right-circle-fill');
	// 	});
	// });
});
</script>