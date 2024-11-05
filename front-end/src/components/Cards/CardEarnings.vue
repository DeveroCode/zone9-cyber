<script setup>
import { computed, ref } from 'vue';
import { CurrencyDollarIcon, ArrowTrendingUpIcon, QuestionMarkCircleIcon, ClockIcon, ArrowUpCircleIcon } from '@heroicons/vue/24/outline'
import { formatCurrency } from '@/helpers'

const props = defineProps({
    stats: {
        type: Array,
        require: true
    },
    totalAmountConfirmed: {
        type: Number,
        require: true
    }
});

const cuantity = computed(() => {
    return props.stats.length > 4 ? props.stats[4].cuantity.value : 0;
});


const perHours = computed(() => {
    return (cuantity.value / props.totalAmountConfirmed);
});
</script>

<template>
    <div
        class="w-[400px] bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold">Total Ganancias</h2>
            <CurrencyDollarIcon class="w-7 h-7 text-primary" />
        </div>
        <p class="font-bold mt-2 text-3xl block">
            {{ stats.length > 4 ? formatCurrency(stats[4].cuantity.value) : 'N/A' }}
        </p>
        <p class="text-xs text-gray-400 mt-3">La ganancia real representa el <span>{{ stats.length > 4 ?
            stats[4].cuantity.percentage + '%' : 'N/A'
                }}</span> de la ganancia total esperada.</p>
    </div>
    <div
        class="w-[400px] bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold">Total Horas</h2>
            <ClockIcon class="w-7 h-7 text-primary" />
        </div>
        <p class="font-bold mt-2 text-3xl block">
            {{ totalAmountConfirmed + ' ' + 'HRS' }}
        </p>
        <p class="text-xs text-gray-400 mt-3">Horas totales de las reservas confirmadas durante el mes</p>
    </div>
    <div
        class="w-[400px] bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold">Promedio por Hora</h2>
            <QuestionMarkCircleIcon class="w-7 h-7 text-primary" />
        </div>
        <p class="font-bold mt-2 text-3xl block">
            {{ perHours }}
        </p>
        <p class="text-xs text-gray-400 mt-3">Horas totales de las reservas confirmadas durante el mes</p>
    </div>
</template>