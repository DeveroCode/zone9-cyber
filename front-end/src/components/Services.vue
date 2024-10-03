<script setup>
import { services } from '@/data';
</script>

<template>
    <div
        class="flex justify-between gap-10 md:gap-3 flex-col md:flex-row lg:gap-5 mt-10 cursor-pointer md:flex-wrap xl:flex-nowrap xl:py-6">
        <div class="border border-gray-300 rounded-xl p-10 flex items-center flex-col w-full md:w-2/5 lg:w-1/3 transition-all duration-300 hover:bg-secondary group hover:transform hover:-translate-y-3 hover:shadow-xl"
            v-for="service in services" :key="service.id">
            <component :is="service.icon" v-if="service.icon" class="w-16 h-16 text-secondary group-hover:text-white" />
            <h2 class="font-bold text-secondary text-center mt-3 group-hover:text-white">{{ service.name }}</h2>
        </div>
    </div>
</template>
