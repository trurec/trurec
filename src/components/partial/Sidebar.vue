<template>
	<nav
		class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg scrollbar">
		<div class="container-fluid">

			<button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse"
				aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<NuxtLink to="/" class="navbar-brand py-lg-2 px-lg-6 me-0">
				<svg class="h-10" version="1.1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 1080 369"
					enable-background="new 0 0 1080 369" xml:space="preserve">
					<path fill="#6462fA" opacity="1.000000" stroke="none"
						d="M421.838379,243.109619 C421.434753,237.359360 420.778870,232.053741 420.757141,226.745544 C420.648682,200.259903 420.751617,173.773438 420.679657,147.287552 C420.657440,139.121933 423.173889,132.381836 431.085083,129.036774 C439.437256,125.505264 447.663971,125.968422 455.071747,131.718170 C460.500244,135.931656 461.319061,141.970139 461.309814,148.319168 C461.276306,171.307053 461.259399,194.295090 461.320862,217.282852 C461.335999,222.940323 461.440094,228.615875 461.902344,234.250381 C463.344727,251.831436 474.465424,261.134064 492.109009,259.744629 C512.455139,258.142334 526.288025,244.125290 526.814087,223.071732 C527.442200,197.933563 527.123352,172.770996 527.150879,147.618942 C527.159058,140.158676 529.152588,133.649384 536.060547,129.863312 C543.578613,125.742851 551.480347,125.709290 558.995911,129.756287 C565.036377,133.008972 567.862427,138.599167 567.898865,145.445786 C567.980408,160.770325 567.989868,176.095322 567.997131,191.420166 C568.009827,218.072830 568.024902,244.725555 567.982117,271.378143 C567.968689,279.748688 564.792358,286.480682 556.635193,289.603241 C548.801758,292.601868 540.988464,292.574036 534.025940,286.967499 C529.810242,283.572815 528.421875,278.853882 528.181213,273.695343 C528.073975,271.397217 528.163086,269.089905 528.163086,265.798828 C509.025574,292.752655 483.417877,296.970947 454.852570,288.175476 C433.569031,281.622101 424.916565,264.319397 421.838379,243.109619" />
					<path class="svg-fill-light svg-fill-dark dark:svg-fill-dark" fill="#6B7280" opacity="1.000000"
						stroke="none"
						d="M754.998962,223.596771 C757.072754,235.826431 760.996277,246.676117 771.340576,253.767258 C780.535950,260.070770 791.132629,261.061554 801.932983,260.673248 C814.202881,260.232178 825.114197,255.229187 836.069580,250.399811 C837.439758,249.795822 838.765442,249.091553 840.122131,248.456055 C848.423828,244.567703 854.091736,245.236771 858.159424,250.576904 C862.594299,256.399109 862.695190,266.804230 857.058655,271.731262 C851.785217,276.340851 845.595154,280.377838 839.143555,283.078033 C815.893860,292.808807 791.941650,295.078278 767.412598,287.959320 C739.065247,279.732208 718.384216,255.017517 715.041199,225.588699 C712.862183,206.406403 713.823730,187.640457 722.085205,169.897385 C734.504761,143.224228 755.787903,129.132233 784.954712,126.755455 C802.017151,125.365082 818.142639,128.253998 832.521729,138.080246 C848.712524,149.144501 857.289307,165.070557 860.826294,183.917664 C861.925110,189.772797 862.203918,195.807800 862.519104,201.778366 C863.096130,212.709473 858.850281,217.114059 847.969727,217.123123 C818.807678,217.147415 789.645630,217.132614 760.483582,217.133347 C758.545715,217.133392 756.607788,217.133347 754.312683,217.133347 C754.575989,219.586899 754.766724,221.364090 754.998962,223.596771 M763.292358,168.841675 C757.613525,176.544586 755.119080,185.322205 754.304688,194.956604 C778.775818,194.956604 803.001953,194.956604 827.217041,194.956604 C827.785645,176.854675 819.425049,161.948685 806.267700,157.269028 C790.546265,151.677414 773.066711,156.211853 763.292358,168.841675" />
					<path class="svg-fill-light svg-fill-dark dark:svg-fill-dark" fill="#6B7280" opacity="1.000000"
						stroke="none"
						d="M966.766418,158.215820 C940.366516,158.566315 927.852539,174.578812 925.155579,198.705994 C923.786072,210.957214 924.146362,223.281174 928.828552,235.049973 C935.679199,252.269363 949.226746,260.778625 967.726318,260.167236 C978.148071,259.822815 986.881897,255.216019 995.777466,250.736694 C998.451477,249.390198 1001.023926,247.803146 1003.786133,246.677948 C1012.866943,242.978745 1020.957275,247.027374 1022.724731,256.540649 C1024.145264,264.186554 1022.497192,271.105743 1015.631531,275.970764 C996.796448,289.317322 975.503479,293.304077 953.049255,291.604156 C931.227722,289.952118 912.617065,281.278839 898.903137,263.654175 C889.777283,251.925934 884.944702,238.337219 883.286011,223.739471 C881.249451,205.815598 882.583374,188.161270 890.183167,171.476273 C900.523987,148.773453 918.055969,134.467896 942.235229,128.874023 C964.893433,123.632065 986.870605,126.378876 1007.690918,136.944412 C1014.824707,140.564529 1021.060791,145.146774 1022.477539,153.894760 C1023.500305,160.210312 1022.466492,166.157364 1017.536194,170.311722 C1012.424988,174.618622 1006.629822,173.041321 1001.165466,170.253479 C998.203613,168.742432 995.156616,167.384842 992.267578,165.747299 C984.473389,161.329468 976.242798,158.463425 966.766418,158.215820" />
					<path fill="#6462fA" opacity="1.000000" stroke="none"
						d="M212.000000,111.952454 C166.670593,111.951782 121.841103,111.998756 77.011803,111.929146 C56.794849,111.897758 44.606190,90.934113 54.765846,73.685043 C59.645187,65.400909 67.338409,61.203270 76.765396,61.184071 C135.426346,61.064610 194.088135,61.042984 252.748657,61.259544 C268.047485,61.316025 278.372223,72.451035 278.143158,87.477318 C277.929535,101.490837 266.803772,111.921371 251.996277,111.947365 C238.830887,111.970482 225.665436,111.952431 212.000000,111.952454" />
					<path class="svg-fill-light svg-fill-dark dark:svg-fill-dark" fill="#6B7280" opacity="1.000000"
						stroke="none"
						d="M695.639282,137.891968 C695.890198,139.611038 696.048767,140.935730 696.079407,142.263397 C696.349060,153.961227 691.814026,159.396698 680.151367,161.182907 C672.772034,162.313110 665.240845,162.738480 658.000671,164.432770 C641.215637,168.360687 630.660950,181.282028 630.174805,199.463730 C629.565002,222.273575 629.914917,245.108871 629.819275,267.933044 C629.808838,270.426910 629.774536,272.944794 629.438416,275.408844 C628.286560,283.851990 622.202209,289.829254 613.691772,291.070953 C603.026611,292.627075 594.330994,288.909668 590.958557,280.829773 C589.716736,277.854523 589.095703,274.401489 589.086060,271.163727 C588.962158,229.511063 588.960999,187.857864 589.027161,146.204941 C589.042236,136.699539 593.344299,130.788757 601.716248,128.000336 C610.198730,125.175102 619.418213,127.262444 624.234619,134.030579 C626.307495,136.943466 627.153076,140.983566 627.722717,144.641373 C628.300537,148.351639 627.850342,152.222015 627.850342,157.478119 C629.673401,154.369400 630.690186,152.392883 631.926575,150.564880 C644.306702,132.260391 662.425293,126.265625 683.427490,127.179474 C689.569214,127.446716 693.755798,131.378677 695.639282,137.891968" />
					<path fill="#6462fA" opacity="1.000000" stroke="none"
						d="M310.771667,127.400650 C319.009857,126.331215 327.238007,126.930740 331.021545,134.349991 C334.179199,140.541901 334.342285,148.260941 335.763428,154.981262 C336.629547,153.657791 337.964111,151.496109 339.417297,149.417404 C351.621979,131.959320 369.281281,126.475929 389.461975,127.121880 C396.607452,127.350586 401.395020,132.345932 402.629425,139.347946 C404.124207,147.826874 401.160767,156.007065 394.820343,158.641312 C390.604523,160.392838 385.876678,160.924088 381.367188,161.953979 C372.831207,163.903442 363.781067,164.634689 355.863525,168.020828 C343.441559,173.333328 337.579010,184.559128 337.068756,197.580292 C336.221283,219.206757 336.503021,240.877319 336.296478,262.529205 C336.256744,266.692963 336.363831,270.871918 336.046387,275.016541 C335.302368,284.730927 327.380707,291.231201 316.261108,291.487305 C305.397430,291.737518 297.123230,285.265350 296.008575,275.578186 C295.780670,273.597504 295.711273,271.588959 295.710510,269.593231 C295.695099,229.104355 295.667664,188.615417 295.721222,148.126617 C295.737457,135.861023 299.830383,130.269012 310.771667,127.400650" />
					<path fill="#7E5CF5" opacity="1.000000" stroke="none"
						d="M189.077866,291.546722 C188.277328,308.447174 166.695099,318.563721 151.601288,309.016724 C144.063477,304.248962 139.758286,297.315552 139.739410,288.298584 C139.650192,245.695221 139.600983,203.091156 139.761337,160.488205 C139.809494,147.692215 149.709137,137.420044 162.399857,136.117325 C174.816132,134.842804 186.406067,143.361252 189.115845,156.691772 C189.050400,202.230316 189.064133,246.888519 189.077866,291.546722" />
					<path fill="#342C7C" opacity="1.000000" stroke="none"
						d="M189.371185,291.186737 C189.064133,246.888519 189.050400,202.230316 189.073212,157.062363 C189.412079,158.146744 189.976639,159.740585 189.978500,161.335068 C190.027832,203.349014 190.021805,245.363037 190.005203,287.377045 C190.004745,288.526978 189.783051,289.676849 189.371185,291.186737" />
				</svg>
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
						<li class="nav-item">
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
											<NuxtLink :to="submenu?.route" class="nav-link"
												active-class="text-primary font-bold">{{ submenu?.title }}</NuxtLink>
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