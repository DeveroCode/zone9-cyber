<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    to: {
        type: String,
        required: true
    }
});
</script>

<template>
    <RouterLink :to="{ name: to }" class="lg:space-x-6 text-base md:text-lg text-secondary">
        <slot></slot>
    </RouterLink>
</template>