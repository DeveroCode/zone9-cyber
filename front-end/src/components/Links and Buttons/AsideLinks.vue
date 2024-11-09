<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { HomeIcon, UserPlusIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    to: {
        type: String,
        default: 'home'
    },
    icon: {
        type: Object,
        require: true,
    }
});

const router = useRoute();

const isActive = computed(() => router.name === props.to);
</script>

<template>
    <div class="hover:dark:bg-secondary-dark px-5 py-2 flex flex-row items-center gap-2 hover:shadow-md rounded-md"
        :class="isActive ? 'dark:bg-secondary-dark shadow-md rounded-md' : ''">
        <component :is="props.icon" class="w-5 h-5 dark:text-white font-bold" />
        <RouterLink :to="{ name: props.to }">
            <slot></slot>
        </RouterLink>
    </div>
</template>