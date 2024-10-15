<script setup>
import { reactive } from 'vue'
import { formatCurrency } from '@/helpers'
import { CurrencyDollarIcon, ArrowTrendingUpIcon, BanknotesIcon, UserIcon } from '@heroicons/vue/24/outline'
import LinkDashboard from '@/components/Links and Buttons/LinkDashboard.vue'
import FormCreateAccount from '@/components/Forms/FormCreateAccount.vue';
import FormAddExpense from '@/components/Forms/FormAddExpense.vue';
import FormAddGain from '@/components/Forms/FormAddGain.vue';


const state = reactive({
    activeForm: 'cuentas'
});

const changeForm = (form) => {
    state.activeForm = form;
};
</script>

<template>
    <section class="mt-10 flex gap-10 cursor-pointer">
        <div
            class="w-1/4 bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
            <div class="flex justify-between items-center">
                <span class="font-semibold">Ingresos Totales</span>
                <CurrencyDollarIcon class="w-7 h-7 text-primary" />
            </div>

            <p class="text-3xl font-bold mt-5">{{ formatCurrency(1000) }}</p>
            <span class="text-gray-400 text-xs flex mt-3 gap-2 items-center">
                <ArrowTrendingUpIcon class="w-6 h-6 text-green-600" />+20.1% desde el anterior mes pasado
            </span>
        </div>
        <div
            class="w-1/4 bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
            <div class="flex justify-between items-center">
                <span class="font-semibold">Gastos</span>
                <BanknotesIcon class="w-7 h-7 text-primary" />
            </div>

            <p class="text-3xl font-bold mt-5">{{ formatCurrency(12000) }}</p>
            <span class="text-gray-400 text-xs flex mt-3 gap-2 items-center">
                <ArrowTrendingUpIcon class="w-6 h-6 text-red-600" />+20.1% desde el anterior mes pasado
            </span>
        </div>
        <div
            class="w-1/4 bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
            <div class="flex justify-between items-center">
                <span class="font-semibold">Rentas Mensuales</span>
                <UserIcon class="w-7 h-7 text-primary" />
            </div>

            <p class="text-3xl font-bold mt-5">+300</p>
            <span class="text-gray-400 text-xs flex mt-3 gap-2 items-center">
                <ArrowTrendingUpIcon class="w-6 h-6 text-green-600" />+30 desde el último mes
            </span>
        </div>
        <div
            class="w-1/4 bg-white dark:bg-primary-dash dark:border-primary-dash dark:text-white text-primary-dash  shadow-md border py-5 rounded-md px-10">
            <div class="flex justify-between items-center">
                <span class="font-semibold">Ganancias Totales</span>
                <CurrencyDollarIcon class="w-7 h-7 text-primary" />
            </div>

            <p class="text-3xl font-bold mt-5">{{ formatCurrency(32000) }}</p>
            <span class="text-gray-400 text-xs flex mt-3 gap-2 items-center">
                <ArrowTrendingUpIcon class="w-6 h-6 text-green-600" />+32.4% desde el anterior mes pasado
            </span>
        </div>
    </section>

    <!-- Navigation - creation of accounts, add expense and earnings -->
    <section class="mt-10">
        <nav class="text-primary-dash dark:text-white space-x-5 py-10">
            <LinkDashboard @click="changeForm('cuentas')" :activeForm="'cuentas'" :currentForm="state.activeForm">
                Cuentas</LinkDashboard>
            <LinkDashboard @click="changeForm('gastos')" :activeForm="'gastos'" :currentForm="state.activeForm">Gasto
            </LinkDashboard>
            <LinkDashboard @click="changeForm('ganancias')" :activeForm="'ganancias'" :currentForm="state.activeForm">
                Ganancias</LinkDashboard>
        </nav>


        <FormCreateAccount v-if="state.activeForm === 'cuentas'" />
        <FormAddExpense v-if="state.activeForm === 'gastos'" />
        <FormAddGain v-if="state.activeForm === 'ganancias'" />
    </section>
</template>