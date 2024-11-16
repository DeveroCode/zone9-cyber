<script setup>
import { reactive, onMounted } from 'vue'
import { formatCurrency } from '@/helpers'
import { usePcServices } from '@/stores/PcServices'
import { CurrencyDollarIcon, ArrowTrendingUpIcon, BanknotesIcon, UserIcon, ArrowUpCircleIcon } from '@heroicons/vue/24/outline'
import LinkDashboard from '@/components/Links and Buttons/LinkDashboard.vue'
import FormCreateAccount from '@/components/Forms/FormCreateAccount.vue';
import FormAddExpense from '@/components/Forms/FormAddExpense.vue';
import FormAddGain from '@/components/Forms/FormAddGain.vue';
import CardComponent from '@/components/Cards/CardComponent.vue';
import StatsCharts from '@/components/StatsCharts.vue';

const services = usePcServices();

// Dictonary for icons
const iconMap = {
    "Ganancias Mensuales": CurrencyDollarIcon,
    "Ganancias Diarias": ArrowUpCircleIcon,
    "Rentas Mensuales": UserIcon,
    "Ganancias Netas": ArrowTrendingUpIcon
}
const state = reactive({
    activeForm: 'cuentas'
});
const changeForm = (form) => {
    state.activeForm = form;
};

onMounted(async () => {
    await services.getStats();
});
</script>

<template>
    <section class="mt-10 flex gap-5 cursor-pointer">
        <CardComponent v-for="(stat) in services.stats" :key="stat.title" :cuantity="stat.cuantity.value"
            :icon="iconMap[stat.title]" :percentage="stat.cuantity.percentage" :title="stat.title">
            {{ stat.title }}
        </CardComponent>
    </section>

    <!-- Navigation - creation of accounts, add expense and earnings -->
    <section class="mt-10">
        <StatsCharts />
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