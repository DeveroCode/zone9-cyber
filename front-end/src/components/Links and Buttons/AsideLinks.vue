<script setup>
import { HomeIcon, UserPlusIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'
defineProps({
    to: {
        type: String,
        default: 'home'
    },
    icon: {
        type: Object,
        require: true,
    }
});
</script>

<template>
    <div class="bg-secondary-dark px-5 py-2 shadow-md rounded-md flex flex-row items-center gap-2">
        <component :is="icon" class="w-5 h-5 text-white font-bold" />
        <RouterLink :to="{ name: to }">
            <slot></slot>
        </RouterLink>
    </div>
</template>