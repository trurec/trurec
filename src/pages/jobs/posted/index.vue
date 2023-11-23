<template>
	<main class="bg-surface-secondary">
		<div class="container-fluid">
			<div class="mt-6">
				<div class="row align-items-center g-6 mt-0 mb-6">
					<div class="col-sm-6">
						<div class="d-flex flex-wrap gap-2">
							<div class="input-group input-group-sm input-group-inline w-100 w-md-50">
								<span class="input-group-text"><i class="bi bi-search me-2"></i> </span><input type="search" class="form-control ps-0" placeholder="Search all assets" aria-label="Search" />
							</div>
							<div class="dropdown">
								<button class="btn btn-sm btn-neutral" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="bi bi-plus-circle"></i> <span class="ms-2">Status</span></button>
								<div class="dropdown-menu" style="">
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkStatus1" /></div>
										<div class="ms-3 me-5"><label for="checkStatus1">Backlog</label></div>
									</div>
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkStatus2" /></div>
										<div class="ms-3 me-5"><label for="checkStatus2">Todo</label></div>
										<div class="ms-auto"><span class="badge rounded-pill bg-opacity-25 bg-success text-success">23</span></div>
									</div>
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkStatus3" /></div>
										<div class="ms-3 me-5"><label for="checkStatus3">In Progress</label></div>
									</div>
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkStatus4" /></div>
										<div class="ms-3 me-5"><label for="checkStatus4">Done</label></div>
										<div class="ms-auto"><span class="badge rounded-pill bg-opacity-25 bg-warning text-warning">190</span></div>
									</div>
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkStatus5" /></div>
										<div class="ms-3 me-5"><label for="checkStatus5">Cancelled</label></div>
									</div>
								</div>
							</div>
							<div class="dropdown">
								<button class="btn btn-sm btn-neutral" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="bi bi-plus-circle"></i> <span class="ms-2">Priority</span></button>
								<div class="dropdown-menu" style="">
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkPriority1" /></div>
										<div class="ms-3 me-5">
											<label class="d-flex align-items-center" for="checkPriority1"><span class="w-rem-2 h-rem-2 me-2 bg-success rounded-circle"></span> <span>Low</span></label>
										</div>
									</div>
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkPriority2" /></div>
										<div class="ms-3 me-5">
											<label class="d-flex align-items-center" for="checkPriority2"><span class="w-rem-2 h-rem-2 me-2 bg-warning rounded-circle"></span> <span>Medium</span></label>
										</div>
									</div>
									<div class="dropdown-item py-1 px-2 d-flex align-items-center">
										<div class="text-lg"><input class="form-check-input" type="checkbox" id="checkPriority3" /></div>
										<div class="ms-3 me-5">
											<label class="d-flex align-items-center" for="checkPriority3"><span class="w-rem-2 h-rem-2 me-2 bg-danger rounded-circle"></span> <span>High</span></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="hstack justify-content-end gap-2">
							<div class="d-flex align-items-center justify-content-end gap-2">
								<div class="dropdown">
									<button class="btn btn-sm btn-neutral flex-none d-flex align-items-center gap-2 py-1 px-2" data-bs-toggle="dropdown" aria-expanded="false">
										<img src="https://clever.webpixels.io/img/flags/eu.svg" class="w-rem-5 h-rem-5 rounded-circle" alt="..." /> <span>EUR</span> <i class="bi bi-chevron-down text-xs me-1"></i>
									</button>
									<ul class="dropdown-menu dropdown-menu-end dropdown-menu-sm" style="">
										<li>
											<a class="dropdown-item d-flex align-items-center gap-2" href="#"><img src="https://clever.webpixels.io/img/flags/us.svg" class="w-rem-6 h-rem-6 rounded-circle" alt="..." /> <span>USD</span></a>
										</li>
										<li>
											<a class="dropdown-item d-flex align-items-center gap-2" href="#">
												<img src="https://clever.webpixels.io/img/flags/eu.svg" class="w-rem-6 h-rem-6 rounded-circle" alt="..." /> <span>EUR</span> <span class="ms-auto text-success text-lg"><i class="bi bi-check"></i></span>
											</a>
										</li>
										<li>
											<a class="dropdown-item d-flex align-items-center gap-2" href="#"><img src="https://clever.webpixels.io/img/flags/gb.svg" class="w-rem-6 h-rem-6 rounded-circle" alt="..." /> <span>GBP</span></a>
										</li>
										<li>
											<a class="dropdown-item d-flex align-items-center gap-2" href="#"><img src="https://clever.webpixels.io/img/flags/au.svg" class="w-rem-6 h-rem-6 rounded-circle" alt="..." /> <span>AUD</span></a>
										</li>
										<li>
											<a class="dropdown-item d-flex align-items-center gap-2" href="#"><img src="https://clever.webpixels.io/img/flags/ro.svg" class="w-rem-6 h-rem-6 rounded-circle" alt="..." /> <span>RON</span></a>
										</li>
									</ul>
								</div>
							</div>
							<div class="d-flex align-items-center justify-content-end gap-2">
								<div class="dropdown">
									<button class="btn btn-sm btn-neutral flex-none d-flex align-items-center gap-2 p-1" data-bs-toggle="dropdown" aria-expanded="false">
										<span class="ms-2">24H</span> <i class="bi bi-chevron-down text-xs me-1"></i>
									</button>
									<ul class="dropdown-menu dropdown-menu-end dropdown-menu-sm">
										<li><a class="dropdown-item gap-2" href="#">12H</a></li>
										<li><a class="dropdown-item gap-2" href="#">6H</a></li>
										<li><a class="dropdown-item gap-2" href="#">4H</a></li>
										<li><a class="dropdown-item gap-2" href="#">1H</a></li>
										<li><a class="dropdown-item gap-2" href="#">30m</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="vstack gap-3">
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/btc.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>WMT/ADA</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 BTC</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total BTC</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 BTC</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/eth.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>CAD/ADA</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 ETH</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total ETH</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 ETH</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/ada.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>BNB/ADA</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 ADA</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total ADA</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 ADA</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/bnb.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Binance</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 BNB</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total BNB</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 BNB</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/chain.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Linkchain</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 CHAIN</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total CHAIN</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 CHAIN</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/btc.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Bitcoin</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 BTC</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total BTC</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 BTC</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/eth.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Ethereum</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 ETH</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total ETH</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 ETH</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/ada.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Cardano</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 ADA</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total ADA</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 ADA</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/bnb.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Binance</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 BNB</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total BNB</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 BNB</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="card border-primary-hover shadow-soft-3-hover">
						<div class="card-body p-4">
							<div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
								<div class="d-flex align-items-center gap-3">
									<div class="avatar-group">
										<img src="https://satoshi.webpixels.io/img/crypto/color/chain.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
										<img src="https://satoshi.webpixels.io/img/crypto/color/usdt.svg" class="avatar avatar-lg border border-2 border-body rounded-circle" alt="..." />
									</div>
									<div class="">
										<h6>Linkchain</h6>
										<span class="d-inline-block text-muted text-xs">0.3% LP Fee</span>
									</div>
								</div>
								<div class="row g-10 gx-xl-16 align-items-center justify-content-between">
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Price</span> <span class="d-block text-heading text-sm fw-bold">0.430215 CHAIN</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total Locked</span> <span class="d-block text-heading text-sm fw-bold">83,699.7</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Total CHAIN</span> <span class="d-block text-heading text-sm fw-bold">4,201.84</span></div>
									<div class="col-6 col-sm-auto col-xl-auto"><span class="d-block text-xs text-muted">Volume 24H</span> <span class="d-block text-heading text-sm fw-bold">60,717.80 CHAIN</span></div>
									<div class="col-12 col-sm-auto col-xl-auto"><button type="button" class="btn btn-xs btn-neutral w-100 w-sm-auto" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">Deposit</button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="d-flex align-items-center justify-content-between mt-4">
						<div><span class="text-muted text-sm">Showing 10 items out of 250 results found</span></div>
						<nav aria-label="Page navigation example">
							<ul class="pagination pagination-spaced gap-1">
								<li class="page-item">
									<a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a>
								</li>
								<li class="page-item"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link" href="#">4</a></li>
								<li class="page-item"><a class="page-link" href="#">5</a></li>
								<li class="page-item">
									<a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

		</div>
	</main>
</template>