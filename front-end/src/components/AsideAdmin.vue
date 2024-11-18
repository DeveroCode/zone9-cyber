<script setup>
import { inject } from 'vue';
import { HomeIcon, UserPlusIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, TicketIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline'
import AsideLinks from './Links and Buttons/AsideLinks.vue';
import Link from './Links and Buttons/Link.vue';
import { authMethods } from '@/stores/AuthMethods';

const methods = authMethods();
const toast = inject('toast');

const logout = async () => {
    const response = await methods.logout();

    if (response.success) {
        toast.success(response.message, { duration: 9000 });
    } else {
        toast.error(response.message, { duration: 9000 });
    }
};
</script>

<template>
    <aside
        class="bg-white border-r-[1px] dark:border-primary-dash min-h-screen w-1/5 shadow-lg p-10 dark:bg-primary-dash">
        <Link to="home">
        <p class="2xl:text-3xl md:text-2xl text-secondary dark:text-white text-center">Administración</p>
        </Link>

        <nav class="text-secondary dark:text-white mt-10 space-y-5 text-lg font-semi-bold h-[86%]">
            <AsideLinks to="dashboard" :icon="HomeIcon">Resumen</AsideLinks>
            <AsideLinks to="reservations" :icon="TicketIcon">Reservas</AsideLinks>
            <AsideLinks to="users" :icon="UserPlusIcon" v-if="methods.isAdmin()">Cuentas</AsideLinks>
            <AsideLinks to="expenses" :icon="ArrowTrendingDownIcon">Gastos</AsideLinks>
            <AsideLinks to="earnings" :icon="ArrowTrendingUpIcon">Ganancias</AsideLinks>
        </nav>

        <button class="text-md font-semibold text-secondary dark:text-white border border-gray-200 dark:border-primary-dash dark:bg-secondary-dark rounded-md py-2 md:px-2 2xl:px-7 shadow-md flex 
            items-center justify-between gap-3" @click="logout">
            Cerrar Sesión
            <ArrowRightEndOnRectangleIcon class="w-5 h-5 mt-[2px]" />
        </button>
    </aside>
</template>