<template>
	<header class="bg-surface-primary border-bottom pt-6">
		<div class="container-fluid">
			<div class="mb-npx">
				<div class="row align-items-center">
					<div class="col-sm-6 col-12 mb-4 mb-sm-0">
						<h1 class="h2 mb-0 ls-tight">Dashboard</h1>
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
					<li class="nav-item ">
						<NuxtLink to="/app/dashboard" class="nav-link" exact exact-active-class="active">
							Overview
						</NuxtLink>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link font-regular">Calender</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>