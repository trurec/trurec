<template>
	<nav id="sidebar" class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg scrollbar">
		<div class="container-fluid">

			<button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse"
				aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<NuxtLink to="/" class="navbar-brand py-lg-2 px-lg-6 me-0">
				<img src="~/assets/images/logos/logo.svg" class="w-full h-10" alt="logo">
			</NuxtLink>

			<div class="navbar-user d-lg-none">
				<div class="dropdown">
					<a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">
						<div class="avatar-parent-child">
							<img alt="Image Placeholder"
								src="https://ui-avatars.com/api/?name=Trurec&background=5C60F5&color=ffffff&rounded=true&bold=true"
								class="avatar avatar-rounded-circle">
							<span class="avatar-child avatar-badge bg-success"></span>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
						<div class="dropdown-header">
							<span class="d-block text-sm text-muted mb-1">Logged in as</span>
							<span class="d-block text-heading font-semibold">Trurec</span>
						</div>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">
							<i class="bi bi-house me-3"></i> Home
						</a>
						<a class="dropdown-item" href="#">
							<i class="bi bi-pencil me-3"></i> Profile
						</a>
						<a class="dropdown-item" href="#">
							<i class="bi bi-gear me-3"></i> Settings
						</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">
							<BootstrapIcon name="box-arrow-left" class="me-3" /> Logout
						</a>
					</div>
				</div>
			</div>

			<div class="collapse navbar-collapse" id="sidebarCollapse">
				<div class="my-4 px-lg-6 position-relative">
					<div class="dropdown w-full">
						<button
							class="btn btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center shadow shadow-3-hover rounded-3"
							type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="flex-fill text-start text-sm text-center text-uppercase font-semibold">Add
								New</span>
							<BootstrapIcon name="arrow-down-circle" class="text-light text-opacity-70" />
						</button>
						<div class="dropdown-menu dropdown-menu-end w-full mt-3">
							<NuxtLink to="/jobs" class="dropdown-item" active-class="active">
								<BootstrapIcon name="briefcase" class="me-3" /> Job
							</NuxtLink>
							<NuxtLink to="/candidates/applicants/create" class="dropdown-item" active-class="active">
								<BootstrapIcon name="people" class="me-3" /> Candidate
							</NuxtLink>
						</div>
					</div>
				</div>

				<ul class="navbar-nav accordion" id="sidebarMainMenu">
					<template v-for="(menu, i) in MainMenuConfig" :key="i">
						<li class="nav-item px-2 rounded">
							<NuxtLink :to="menu?.route" class="nav-link collapsed" active-class="active" :id="`menu-${i}`"
								data-bs-toggle="collapse" :data-bs-target="`#main-menu-${i}`"
								:aria-expanded="activeSubmenu(menu?.route)" :aria-controls="`main-menu-${i}`">
								<BootstrapIcon :name="menu?.icon" /> {{ menu?.title }}
							</NuxtLink>
							<div class="collapse" :class="{ 'show': activeSubmenu(menu?.route) }" :id="`main-menu-${i}`"
								:aria-labelledby="`menu-${i}`" data-bs-parent="#sidebarMainMenu">
								<ul class="nav nav-sm flex-column">
									<template v-for="(submenu, j) in menu?.submenus" :key="j">
										<li class="nav-item">
											<NuxtLink :to="submenu?.route" class="nav-link" active-class="font-bold">{{ submenu?.title }}</NuxtLink>
										</li>
									</template>
								</ul>
							</div>
						</li>
					</template>
				</ul>

				<hr class="navbar-divider my-5 opacity-20">

				<div class="mt-auto"></div>

				<div class="my-4 px-lg-6 position-relative d-none d-md-block">
					<div class="dropup w-full">
						<button
							class="btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center shadow shadow-3-hover rounded-3"
							type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="me-3">
								<img alt="..."
									src="https://ui-avatars.com/api/?name=Trurec&background=5C60F5&color=ffffff&rounded=true&bold=true"
									class="avatar avatar-sm rounded-circle" />
							</span>
							<span class="flex-fill text-start text-sm font-semibold">Trurec </span>
							<BootstrapIcon name="chevron-expand" class="text-dark text-opacity-70" />
						</button>
						<div class="dropdown-menu dropdown-menu-end w-full">
							<div class="dropdown-header">
								<span class="d-block text-sm text-muted mb-1">Logged in as</span>
								<span class="d-block text-heading font-semibold">Trurec</span>
							</div>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">
								<i class="bi bi-house me-3"></i> Home
							</a>
							<a class="dropdown-item" href="#">
								<i class="bi bi-pencil me-3"></i> Profile
							</a>
							<a class="dropdown-item" href="#">
								<i class="bi bi-gear me-3"></i> Settings
							</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">
								<BootstrapIcon name="box-arrow-left" class="me-3" /> Logout
							</a>
						</div>
					</div>
					<div class="d-flex gap-3 justify-content-center align-items-center mt-6">
						<div>
							<BootstrapIcon name="moon-stars" class="text-warning me-2" />
							<span class="text-heading text-sm font-bold">Dark mode</span>
						</div>
						<div class="ms-auto">
							<div class="form-check form-switch me-n2">
								<input class="form-check-input" type="checkbox" id="switch-dark-mode" />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import MainMenuConfig from "~/config/MainMenuConfig";

const routeObject = reactive({ route: useRoute() });

const activeSubmenu = (input: string) => {
	// Convert the input to an array if it's not already
	const paths = Array.isArray(input) ? input : [input];

	// Return true if any of the specified paths is a prefix of the current route's path
	return paths.some((path) => routeObject?.route?.path.startsWith(path));
};
</script>