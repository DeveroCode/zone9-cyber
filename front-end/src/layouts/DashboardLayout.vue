<script setup>
import AsideAdmin from '@/components/AsideAdmin.vue';
import { authMethods } from '@/stores/AuthMethods';

const useMethod = authMethods();
</script>

<template>
    <section class="max-w-8xl h-screen flex justify-between dark:bg-secondary-dark">
        <AsideAdmin class="h-full overflow-hidden" />
        <div class="w-full flex flex-col px-16 py-10 overflow-auto">
            <!-- Header -->
            <header class="max-h-72 bg-white py-6 px-16 rounded-md shadow-md dark:bg-primary-dash dark:text-white">
                <h1 class="text-3xl font-bold">Bienvenido {{ useMethod.user.name }}</h1>
            </header>

            <!-- Contenedor de contenido con scroll -->
            <RouterView />
        </div>
    </section>
</template>