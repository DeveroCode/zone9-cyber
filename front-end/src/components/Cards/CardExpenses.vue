<script setup>
import { computed } from 'vue';
import { CurrencyDollarIcon, ArrowTrendingUpIcon, ChartPieIcon, ClockIcon, ArrowUpCircleIcon } from '@heroicons/vue/24/outline'
import { formatCurrency } from '@/helpers'

const props = defineProps(['stats', 'ExpensesHours', 'totalNotConfirmed']);

const perHours = computed(() => {
    return (props.totalNotConfirmed / props.ExpensesHours);
});
</script>

<template>
    <div
        class="w-[400px] bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold">Perdida Total</h2>
            <CurrencyDollarIcon class="w-7 h-7 text-primary" />
        </div>
        <p class="font-bold mt-2 text-3xl block">
            {{ formatCurrency(totalNotConfirmed) }}
        </p>
        <p class="text-xs text-gray-400 mt-3">La ganancia real representa el 19% de la ganancia total esperada.</p>
    </div>
    <div
        class="w-[400px] bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold">Horas Perdidas</h2>
            <ClockIcon class="w-7 h-7 text-primary" />
        </div>
        <p class="font-bold mt-2 text-3xl block">
            {{ ExpensesHours + ' ' + 'HRS' }}
        </p>
        <p class="text-xs text-gray-400 mt-3">Horas totales de las reservas perdidas durante el mes</p>
    </div>
    <div
        class="w-[400px] bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold">Promedio de Perdida</h2>
            <ChartPieIcon class="w-7 h-7 text-primary" />
        </div>
        <p class="font-bold mt-2 text-3xl block">
            {{ formatCurrency(perHours) }}
        </p>
        <p class="text-xs text-gray-400 mt-3">Perdidas por horas</p>
    </div>
</template>