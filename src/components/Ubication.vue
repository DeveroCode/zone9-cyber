<script setup>
import Location from '@/components/Location.vue';
</script>

<template>
    <section
        class="p-6 md:p-16 xl:p-24 2xl:p-32 flex flex-col md:flex-row gap-8 md:gap-16 xl:gap-24 2xl:gap-32 md:items-center h-auto md:h-screen relative">
        <Location />

        <div class="px-4 md:px-0 z-10">
            <h5 class="text-base md:text-lg xl:text-xl 2xl:text-2xl text-secondary text-center md:text-start">
                Nuestra
                Ubicación</h5>
            <span
                class="text-secondary block mt-2 font-bold text-lg md:text-3xl xl:text-4xl 2xl:text-5xl text-center md:text-start">
                Conéctate cerca y a distancia
            </span>

            <div class="text-center md:text-start mt-8 xl:mt-10 2xl:mt-12">
                <span class="block text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-3 text-secondary">Sede
                    central</span>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Zona9.com</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Ascensión, Chihuahua</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">C.2 Naciones 207</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Col. Centro, 31820</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Chihuahua</p>
            </div>
        </div>
    </section>
</template>