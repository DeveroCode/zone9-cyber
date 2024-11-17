<script setup>
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'
import { formatCurrency } from '@/helpers';

const percentageTitle = '';

const props = defineProps({
    icon: {
        type: Object,
        required: true
    },
    cuantity: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const formatStats = cuantity => {
    if (props.title === 'Ganancias Mensuales' || props.title === 'Ganancias Diarias' || props.title === 'Ganancias Netas') {
        return formatCurrency(cuantity);
    } else {
        return '+' + cuantity;
    }
};

function formatTitlePercentage(title) {
    if (title === 'Ganancias Mensuales' || title === 'Rentas Mensuales') {
        return 'desde el anterior mes pasado';
    } else if (title === 'Ganancias Diarias' || title === 'Ganancias Netas') {
        return 'desde el día anterior';
    }
}
</script>

<template>
    <div
        class="w-1/4 bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between items-center">
            <span class="font-semibold">
                <slot></slot>
            </span>
            <component :is="icon" class="w-7 h-7 text-primary"></component>
        </div>

        <p class="text-3xl font-bold mt-5" v-if="cuantity">{{ formatStats(cuantity) }}</p>
        <p class="text-3xl font-bold mt-5" v-else>N/A</p>
        <span class="text-gray-400 text-xs flex mt-3 gap-2 items-center" v-if="percentage > 0">
            <ArrowTrendingUpIcon class="w-6 h-6 text-green-600" />{{
                percentage }}% {{ formatTitlePercentage(title) }}
        </span>
        <span class="text-gray-400 text-xs flex mt-3 gap-2 items-center" v-else>
            <ArrowTrendingDownIcon class="w-6 h-6 text-red-600" />{{
                percentage }}% de perdidas
        </span>
    </div>
</template>