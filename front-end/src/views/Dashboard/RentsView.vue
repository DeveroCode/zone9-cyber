<script setup>
import { usePcServices } from '@/stores/PcServices';
import { formatCurrency, toggleModal } from '@/helpers';
import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/vue/24/outline';
import EditReservationModal from '@/components/Modals/EditReservationModal.vue';
const reservations = usePcServices();
</script>

<template>
    <main class="mt-10">
        <table class="min-w-full table-auto rounded-xl overflow-hidden shadow-lg">
            <thead class="bg-gray-700 text-gray-300 uppercase text-sm">
                <tr>
                    <th class="px-4 py-3 text-left">Fecha</th>
                    <th class="px-4 py-3 text-left">Nombre</th>
                    <th class="px-4 py-3 text-left w-1/12">Computadora</th>
                    <th class="px-4 py-3 text-right">Precio</th>
                    <th class="px-4 py-3 text-right">Tiempo</th>
                    <th class="px-4 py-3 text-left">Servicio</th>
                    <th class="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody class="bg-gray-800 text-gray-100">
                <tr class="hover:bg-gray-600" v-for="service in reservations.reservations" :key="service.id">
                    <td class="px-4 py-3">{{ service.day_reservation }}</td>
                    <td class="px-4 py-3">{{ service.name }} {{ service.last_name }}</td>
                    <td class="px-4 py-3">{{ service.pc }}</td>
                    <td class="px-4 py-3 text-right text-green-400 font-semibold">{{ formatCurrency(service.total_mount)
                        }}</td>
                    <td class="px-4 py-3 text-right">{{ service.total_hours }} Hrs</td>
                    <td class="px-4 py-3">De {{ service.start }} Hasta {{ service.end }}</td>
                    <td class="px-4 py-3 text-center">
                        <button class="text-white font-medium py-1 px-3"
                            @click="reservations.handleSelectServiceToEdit({ ...service })">
                            <PencilSquareIcon class="w-5 h-5" />
                        </button>
                        <button class="text-white font-medium py-1 px-3">
                            <TrashIcon class="w-5 h-5" />
                        </button>
                        <button class="text-white font-medium py-1 px-3">
                            <EyeIcon class="w-5 h-5" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>

    <EditReservationModal :visible="reservations.visible" />
</template>