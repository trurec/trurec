<template>
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

        <PartialSidebar></PartialSidebar>

        <div class="flex-lg-1 h-screen overflow-y-lg-auto">

            <PartialTopbar></PartialTopbar>

            <PartialHeader></PartialHeader>

            <slot></slot>
        </div>

    </div>
</template>