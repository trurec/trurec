<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-nowrap">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Position</th>
                                <th scope="col">Worked hours</th>
                                <th scope="col">Performance</th>
                                <th scope="col">Actions</th>
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
            </div>
        </div>
    </div>
</template>