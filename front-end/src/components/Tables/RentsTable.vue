<script setup>
import { formatCurrency } from '@/helpers';
import { PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    reservations: {
        type: Array,
        required: true
    },
    handleViewModal: {
        type: Function,
        required: true
    },
    NotConfirmReservation: {
        type: Function,
        required: true
    },
    ConfirmReservation: {
        type: Function,
        required: true
    },
    handleDeleteModal: {
        type: Function,
        required: true
    }
});
</script>

<template>
    <table class="min-w-full table-auto rounded-xl overflow-hidden shadow-lg" v-if="props.reservations.length > 0">
        <thead class="dark:bg-gray-700 dark:text-gray-300 text-secondary uppercase text-sm">
            <tr>
                <th class="px-4 py-3 text-left">Fecha</th>
                <th class="px-4 py-3 text-left">Nombre</th>
                <th class="px-4 py-3 text-left 2xl:w-1/12 md:w-[100px]">Computadora</th>
                <th class="px-4 py-3 text-right">Precio</th>
                <th class="px-4 py-3 text-right">Tiempo</th>
                <th class="px-4 py-3 text-left">Servicio</th>
                <th class="px-4 py-3 text-center md:w-[200px]">Acciones</th>
            </tr>
        </thead>
        <tbody class="dark:bg-gray-800 dark:text-gray-100 text-secondary">
            <tr class="dark:hover:bg-gray-600 hover:bg-gray-100" v-for="service in props.reservations"
                :key="service.id">
                <td class="px-4 py-3">{{ service.day_reservation }}</td>
                <td class="px-4 py-3">{{ service.name }} {{ service.last_name }}</td>
                <td class="px-4 py-3">{{ service.pc }}</td>
                <td class="px-4 py-3 text-right text-green-400 font-semibold">{{
                    formatCurrency(service.total_amount)
                }}</td>
                <td class="px-4 py-3 text-right">{{ service.total_hours }} Hrs</td>
                <td class="px-4 py-3">De {{ service.start }} Hasta {{ service.end }}</td>
                <td class="px-4 py-3 text-center">
                    <button class="dark:text-white font-medium py-1 px-3"
                        @click="handleViewModal({ ...service }, service.id)">
                        <PencilSquareIcon class="w-5 h-5" />
                    </button>
                    <button class="text-red-800 font-medium py-1 px-3" @click="props.handleDeleteModal(service.id)">
                        <TrashIcon class="w-5 h-5" />
                    </button>
                    <button class="text-purple-600 font-medium py-1 px-3"
                        @click="props.NotConfirmReservation(service.id)" v-if="service.loan === 1">
                        <EyeSlashIcon class="w-5 h-5" />
                    </button>
                    <button class="text-purple-600 font-medium py-1 px-3" @click="props.ConfirmReservation(service.id)"
                        v-else>
                        <EyeIcon class="w-5 h-5" />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>