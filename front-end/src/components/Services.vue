<script setup>
import { services } from '@/data';
</script>

<template>
    <div
        class="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-10 md:gap-3 lg:gap-5 mt-10 cursor-pointer xl:py-6">
        <div class="relative border border-gray-300 rounded-md w-full md:w-2/5 lg:w-1/3 transition-all duration-300 hover:bg-secondary group hover:transform hover:-translate-y-3 hover:shadow-xl"
            v-for="service in services" :key="service.id">
            <div class="absolute inset-0 bg-cover bg-center rounded-md shadow-xl"
                :style="{ backgroundImage: `url(${service.icon})`, filter: 'brightness(0.5)' }">
            </div>
            <div class="relative z-10 p-10 flex items-center justify-center h-full">
                <h2 class="font-bold text-white text-center group-hover:text-white">{{ service.name }}</h2>
            </div>
        </div>
    </div>
</template>
