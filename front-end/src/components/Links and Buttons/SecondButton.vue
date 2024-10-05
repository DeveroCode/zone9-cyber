<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    direction: {
        type: String,
        default: 'home'
    },
    size: {
        type: String,
    }
});
</script>

<template>
    <RouterLink
        :class="`py-1.5 px-6 md:py-2 md:px-8 lg:px-10 rounded-full ${size} bg-${type} text-sm md:text-base lg:text-l`"
        :to="{ name: direction }">
        <slot></slot>
    </RouterLink>
</template>