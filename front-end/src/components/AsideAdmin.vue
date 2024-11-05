<script setup>
import { HomeIcon, UserPlusIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, TicketIcon } from '@heroicons/vue/24/outline'
import AsideLinks from './Links and Buttons/AsideLinks.vue';
</script>


<template>
    <aside
        class="bg-white border-r-[1px] dark:border-primary-dash min-h-screen w-1/5 shadow-lg p-10 dark:bg-primary-dash">
        <h2 class="text-3xl font-semibold text-secondary dark:text-white overflow-hidden">Administración</h2>

        <nav class="text-secondary dark:text-white mt-10 space-y-5 text-lg font-semi-bold">
            <AsideLinks to="dashboard" :icon="HomeIcon">Resumen</AsideLinks>
            <AsideLinks to="reservations" :icon="TicketIcon">Reservas</AsideLinks>
            <AsideLinks :icon="UserPlusIcon">Cuentas</AsideLinks>
            <AsideLinks :icon="ArrowTrendingDownIcon">Gastos</AsideLinks>
            <AsideLinks to="earnings" :icon="ArrowTrendingUpIcon">Ganancias</AsideLinks>
        </nav>
    </aside>
</template>