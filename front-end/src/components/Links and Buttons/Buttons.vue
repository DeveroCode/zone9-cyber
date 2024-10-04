<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    type: {
        type: String,
        default: 'bg-primary'
    },
    direction: {
        type: String,
        default: 'home'
    }
});
</script>

<template>
    <RouterLink
        :class="`text-secondary py-3 px-6 md:px-8 lg:px-10 rounded-full mt-6 lg:mt-10 font-bold text-base md:text-lg lg:text-xl ${type} hover:bg-white hover:text-secondary transition-all duration-300`"
        :to="{ name: direction }">
        <slot></slot>
    </RouterLink>
</template>