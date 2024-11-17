<script setup>
import { onMounted, ref } from 'vue';
import { usePcServices } from "@/stores/PcServices";
import { formatCurrency } from "@/helpers";
import { Bars3CenterLeftIcon, ChartBarIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';
import CardExpenses from '@/components/Cards/CardExpenses.vue';
import ExpensesModal from '@/components/Modals/ExpensesModal.vue';

const services = usePcServices();
const visible = ref(false);
const card = ref(false);
const table = ref(false);

onMounted(async () => {
    services.isLoading = true;
    setTimeout(() => {
        services.isLoading = false;
    }, 600);
    await services.getReservationsFn();
    await services.getStats();
});

const handleViewModal = () => {
    visible.value = !visible.value
};

const handleCard = () => {
    card.value = !card.value
};

const handleTable = () => {
    table.value = !table.value
};
</script>

<template>
    <div class="flex justify-end gap-3 mt-10">
        <button
            class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash"
            @click="handleCard">
            <ChartBarIcon class="w-5 h-5 mt-1" /> Vista Tarjetas
        </button>
        <button
            class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash"
            @click="handleTable">
            <Bars3CenterLeftIcon class="w-5 h-5 mt-1" /> Vista Tabla
        </button>
        <button
            class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash"
            @click="handleViewModal">
            <EyeIcon class="w-5 h-5 mt-1" /> Ver Perdidas
        </button>
    </div>

    <section class="mt-2 flex gap-5 justify-between cursor-pointer" :class="card ? 'hidden' : ''">
        <CardExpenses :stats="services.stats" :ExpensesHours="services.ExpensesHours"
            :totalNotConfirmed="services.totalNotConfirmed" />
    </section>

    <main class="mt-10" :class="table ? 'hidden' : ''">
        <table class="min-w-full table-auto rounded-xl overflow-hidden shadow-lg"
            v-if="services.NotConfirmed.length > 0">
            <thead class="dark:bg-gray-700 dark:text-gray-300 text-secondary uppercase text-sm">
                <tr>
                    <th class="px-4 py-3 text-left">Fecha</th>
                    <th class="px-4 py-3 text-left w-1/4">Nombre</th>
                    <th class="px-4 py-3 text-left w-1/12">Computadora</th>
                    <th class="px-4 py-3 text-right">Precio</th>
                    <th class="px-4 py-3 text-right">Tiempo</th>
                    <th class="px-4 py-3 text-left">Servicio</th>
                </tr>
            </thead>
            <tbody class="dark:bg-gray-800 dark:text-gray-100 text-secondary">
                <tr class="dark:hover:bg-gray-600 hover:bg-gray-100" v-for="service in services.NotConfirmed"
                    :key="service.id">
                    <td class="px-4 py-3">{{ service.day_reservation }}</td>
                    <td class="px-4 py-3">{{ service.name }} {{ service.last_name }}</td>
                    <td class="px-4 py-3">{{ service.pc }}</td>
                    <td class="px-4 py-3 text-right text-green-400 font-semibold">{{
                        formatCurrency(service.total_amount)
                    }}</td>
                    <td class="px-4 py-3 text-right">{{ service.total_hours }} Hrs</td>
                    <td class="px-4 py-3">De {{ service.start }} Hasta {{ service.end }}</td>
                </tr>
            </tbody>
        </table>

        <p class="text-center text-gray-600 text-2xl font-semibold" v-else>Aún no hay gastos registrados en este mes,
            por favor agrega un nuevo gasto</p>
    </main>

    <ExpensesModal :visible="visible" :totalNotConfirmed="services.totalNotConfirmed"
        :totalNotConfirmedCount="services.totalNotConfirmedCount" :stats="services.stats"
        @update:visible="handleViewModal" />
</template>