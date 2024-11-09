<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AsideAdmin from '@/components/AsideAdmin.vue';
import { SunIcon } from '@heroicons/vue/24/solid';
import { authMethods } from '@/stores/AuthMethods';
import { setHeaderTitle } from '@/helpers';

const router = useRoute();
const useMethod = authMethods();
const darkMode = ref(false);

function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    document.documentElement.classList.toggle('dark', darkMode.value);
    localStorage.setItem('darkMode', darkMode.value);
};

onMounted(() => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkMode.value = true;
        document.documentElement.classList.add('dark');
    }
});
</script>

<template>
    <section class="max-w-8xl h-screen flex justify-between dark:bg-secondary-dark">
        <AsideAdmin class="h-full overflow-hidden" />
        <div class="w-full flex flex-col px-16 py-10 overflow-auto">
            <!-- Header -->
            <header
                class="max-h-72 bg-white py-6 px-16 rounded-md shadow-md dark:bg-primary-dash dark:text-white flex justify-between items-center">
                <h1 class="text-3xl font-bold">{{ setHeaderTitle(router.name) }}</h1>
                <button @click="toggleDarkMode">
                    <SunIcon class="w-8 h-8" />
                </button>
            </header>

            <!-- Renderiza todas nuestras vistas que requieran este layout -->
            <RouterView />
        </div>
    </section>
</template>