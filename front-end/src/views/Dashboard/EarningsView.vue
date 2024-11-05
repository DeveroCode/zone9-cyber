<script setup>
import { ref, watch, inject, onMounted } from 'vue';
import { formatCurrency } from '@/helpers';
import { usePcServices } from '@/stores/PcServices';
import { Bars3CenterLeftIcon, ChartBarIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';
import EarningsModal from '@/components/Modals/EarningsModal.vue';
import CardEarnings from '@/components/Cards/CardEarnings.vue';

const services = usePcServices();
const visible = ref(false);
const cards = ref(false);
const table = ref(false);

onMounted(async () => {
    await services.getStats();
});

const handleViewModal = () => {
    visible.value = !visible.value
};

const handleOenTable = () => {
    table.value = !table.value
};
const handleOpenCards = () => {
    cards.value = !cards.value
};
</script>

<template>
    <div class="flex justify-end gap-3 mt-10">
        <button
            class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash"
            @click="handleOpenCards">
            <ChartBarIcon class="w-5 h-5 mt-1" /> Vista Tarjetas
        </button>
        <button
            class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash"
            @click="handleOenTable">
            <Bars3CenterLeftIcon class="w-5 h-5 mt-1" /> Vista Tabla
        </button>
        <button
            class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash"
            @click="handleViewModal">
            <EyeIcon class="w-5 h-5 mt-1" /> Ver Ganancias
        </button>
    </div>
    <section class="mt-2 flex gap-5 justify-between cursor-pointer" :class="cards ? '' : 'hidden'">
        <CardEarnings :stats="services.stats" :totalAmountConfirmed="services.totalAmountConfirmed" />
    </section>

    <main class="mt-10" :class="table ? 'hidden' : ''">
        <table class="min-w-full table-auto rounded-xl overflow-hidden shadow-lg">
            <thead class="bg-gray-700 text-gray-300 uppercase text-sm">
                <tr>
                    <th class="px-4 py-3 text-left">Fecha</th>
                    <th class="px-4 py-3 text-left w-1/4">Nombre</th>
                    <th class="px-4 py-3 text-left w-1/12">Computadora</th>
                    <th class="px-4 py-3 text-right">Precio</th>
                    <th class="px-4 py-3 text-right">Tiempo</th>
                    <th class="px-4 py-3 text-left">Servicio</th>
                </tr>
            </thead>
            <tbody class="bg-gray-800 text-gray-100">
                <tr class="hover:bg-gray-600" v-for="service in services.confirmedReservations" :key="service.id">
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
    </main>

    <EarningsModal :stat="services.stats" :visible="visible" @update:visible="visible = false"
        :totalConfirmed="services.totalConfirmed" />
</template>