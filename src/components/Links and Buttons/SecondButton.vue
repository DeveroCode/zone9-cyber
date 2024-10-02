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
        :class="`py-1.5 px-6 md:py-2 md:px-8 lg:px-10 rounded-full bg-${type} ${type} text-sm md:text-base lg:text-l`">
        <slot></slot>
    </RouterLink>
</template>