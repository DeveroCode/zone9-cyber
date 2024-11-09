<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    activeForm: {
        type: String,
        default: 'cuentas'
    },
    currentForm: {
        type: String,
        default: true
    }
});
</script>

<template>
    <span class="text-center cursor-pointer py-2 px-5"
        :class="currentForm === activeForm ? 'dark:bg-secondary shadow-md rounded-lg' : ''">
        <slot></slot>
    </span>
</template>