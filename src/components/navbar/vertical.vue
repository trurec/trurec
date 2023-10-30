<template>
	<nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg">
		<div class="container-fluid">

			<button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
				<img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="...">
			</a>

			<div class="navbar-user d-lg-none">
				<div class="dropdown">
					<a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<div class="avatar-parent-child">
							<img alt="Image Placeholder" src="https://ui-avatars.com/api/?name=Nanthu&background=5C60F5&color=ffffff&rounded=true&bold=true" class="avatar avatar-rounded-circle">
							<span class="avatar-child avatar-badge bg-success"></span>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
						<a href="#" class="dropdown-item">Profile</a>
						<a href="#" class="dropdown-item">Settings</a>
						<a href="#" class="dropdown-item">Billing</a>
						<hr class="dropdown-divider">
						<a href="#" class="dropdown-item">Logout</a>
					</div>
				</div>
			</div>

			<div class="collapse navbar-collapse" id="sidebarCollapse">
				<ul class="navbar-nav">
					<li class="nav-item">
						<NuxtLink to="/dashboard" class="nav-link" exact exact-active-class="active">
							<BootstrapIcon name="house" /> Dashboard
						</NuxtLink>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<BootstrapIcon name="briefcase" /> Jobs
						</a>
					</li>
					<li class="nav-item">
						<NuxtLink to="/candidates" class="nav-link" exact exact-active-class="active">
							<BootstrapIcon name="people" /> Candidates
						</NuxtLink>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<BootstrapIcon name="bar-chart" /> Analitycs
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<BootstrapIcon name="tools" /> Setup
						</a>
					</li>
				</ul>
				<hr class="navbar-divider my-5 opacity-20">
				<div class="mt-auto"></div>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i class="bi bi-person-square"></i> Account
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i class="bi bi-box-arrow-left"></i> Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>