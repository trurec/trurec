<template>
    <div class="container-fluid">
        <div class="vstack gap-4">
            <div class="d-flex justify-content-between flex-column flex-sm-row gap-3">
                <div class="hstack gap-2">
                    <div class="input-group input-group-sm input-group-inline">
                        <span class="input-group-text pe-2">
                            <i class="bi bi-search"></i> 
                        </span>
                        <input type="email" class="form-control" placeholder="Search" aria-label="Search" />
                    </div>
                    <div>
                        <button type="button" class="btn btn-sm px-3 btn-neutral d-flex align-items-center">
                            <i class="bi bi-funnel me-2"></i> 
                            <span>Filters</span> 
                            <span class="vr opacity-20 mx-3"></span> 
                            <span class="text-xs text-primary">2</span>
                        </button>
                    </div>
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-sm btn-neutral">
                        <i class="bi bi-cloud-download me-2"></i> Download all 
                    </a>
                    <a href="#" class="btn btn-sm btn-neutral">
                        <i class="bi bi-gear-wide me-2"></i> Settings
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-bottom d-flex align-items-center">
                    <h5 class="me-auto">All projects</h5>
                    <div class="dropdown">
                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#!" class="dropdown-item">Action </a>
                            <a href="#!" class="dropdown-item">Another action </a>
                            <a href="#!" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover table-nowrap">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Position</th>
                                <th scope="col">Worked hours</th>
                                <th scope="col">Performance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img alt="..." src="https://ui-avatars.com/api/?name=John+Doe" class="avatar avatar-sm rounded-circle me-2" /> 
                                    <a class="text-heading text-primary-hover font-semibold" href="#">Robert Fox</a>
                                </td>
                                <td>Feb 15, 2021</td>
                                <td>
                                    <span class="badge text-uppercase bg-soft-primary text-primary rounded-pill">Web Developer</span>
                                </td>
                                <td>180 hrs</td>
                                <td>180 hrs</td>
                                <td class="text-end">
                                    <a href="#" class="btn btn-sm btn-square btn-neutral">
                                        <i class="bi bi-pencil"></i> 
                                    </a>
                                    <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer border-0 py-5">
                    <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
definePageMeta({});
</script>