<script setup>
import { ref } from 'vue';
import { usePcServices } from '@/stores/PcServices';
import { formatCurrency, toggleModal } from '@/helpers';
import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/vue/24/outline';
import EditReservationModal from '@/components/Modals/EditReservationModal.vue';
import DeleteModal from '@/components/Modals/DeleteModal.vue';

const reservations = usePcServices();
const edit = ref(false);
const remove = ref(false);
const identifier = ref(0);

const handleViewModal = (service, id) => {
    identifier.value = id;
    edit.value = !edit.value;
    reservations.onCreateReservation(service, id);
};

const handleDeleteModal = (id) => {
    identifier.value = id;
    remove.value = !remove.value;
};
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
                    <td class="px-4 py-3 text-right text-green-400 font-semibold">{{
                        formatCurrency(service.total_amount)
                        }}</td>
                    <td class="px-4 py-3 text-right">{{ service.total_hours }} Hrs</td>
                    <td class="px-4 py-3">De {{ service.start }} Hasta {{ service.end }}</td>
                    <td class="px-4 py-3 text-center">
                        <button class="text-white font-medium py-1 px-3"
                            @click="handleViewModal({ ...service }, service.id)">
                            <PencilSquareIcon class="w-5 h-5" />
                        </button>
                        <button class="text-white font-medium py-1 px-3" @click="handleDeleteModal(service.id)">
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

    <EditReservationModal :visible="visible" :id="identifier" />
    <DeleteModal :id="identifier" :visible="remove" :deleteReservation="reservations.deleteReservation" />
</template>