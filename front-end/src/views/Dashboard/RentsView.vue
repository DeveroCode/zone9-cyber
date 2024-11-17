<script setup>
import { ref, inject, watch, onMounted } from 'vue';
import { usePcServices } from '@/stores/PcServices';
import { formatCurrency } from '@/helpers';
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import RentsTable from '@/components/Tables/RentsTable.vue';
import EditReservationModal from '@/components/Modals/EditReservationModal.vue';
import DeleteModal from '@/components/Modals/DeleteModal.vue';

const reservations = usePcServices();
const toast = inject('toast');
const edit = ref(false);
const remove = ref(false);
const identifier = ref(0);
const word = ref('');

onMounted(async () => {
    try {
        await reservations.getReservationsFn();
    } catch (error) {
        console.log(error);
    }
});

watch(word, async (newWord) => {
    if (newWord === '') {
        await reservations.getReservationsFn();
    }
});


const handleViewModal = (service, id) => {
    identifier.value = id;
    edit.value = !edit.value;
    reservations.onCreateReservation(service, id);
};

const handleDeleteModal = (id) => {
    identifier.value = id;
    remove.value = !remove.value;
};

const handleSubmitData = async () => {
    if (word.value === '') {
        toast.error('Ingresa un folio existente para buscar', { duration: 2000 });
    } else {
        const response = await reservations.searchReservation(word.value);
        if (response.success) {
            toast.success(response.message, { duration: 2000 });
        } else {
            toast.error(response.message, { duration: 2000 });
        }
    }
};
</script>

<template>
    <form class="flex items-center gap-3 mt-10" @submit.prevent="handleSubmitData">
        <input type="text" name="word" v-model="word" placeholder="Buscar empleado Ej: Juan Perez"
            class="rounded-md border-gray-200 shadow px-3 py-2 dark:text-white dark:border-secondary-dark dark:placeholder-gray-400 dark:bg-gray-600 w-64 focus:outline-none focus:ring-0 focus:border-gray-300" />

        <button class=" text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md
    my-4 border border-primary-dash dark:border-0 shadow">
            <MagnifyingGlassIcon class="w-5 h-5 mt-1" type="submit" /> Buscar
        </button>
    </form>

    <main class="mt-5">
        <RentsTable v-if="reservations.reservations.length" :reservations="reservations.reservations"
            :handleViewModal="handleViewModal" :NotConfirmReservation="reservations.NotConfirmReservation"
            :ConfirmReservation="reservations.ConfirmReservation" :handleDeleteModal="handleDeleteModal" />
        <p class="text-center text-gray-600 text-2xl font-semibold mt-32" v-else>Aún no hay reservaciones, por favor
            verifica
            tu conexión</p>

        <div class="flex justify-end items-center mt-5" v-if="reservations.reservations.length > 1">
            <button @click="reservations.changePage(reservations.pagination.links.prev)"
                :disabled="!reservations.pagination.links.prev" class="px-4 py-2 mx-1 cursor-pointer dark:text-white">
                <ChevronLeftIcon class="w-7 h-7" />
            </button>
            <span class="px-4 py-2 mx-1 dark:text-white">{{ reservations.pagination.current_page }} de {{
                reservations.pagination.last_page }}</span>
            <button @click="reservations.changePage(reservations.pagination.links.next)"
                :disabled="!reservations.pagination.links.next" class="px-4 py-2 mx-1 cursor-pointer dark:text-white">
                <ChevronRightIcon class="w-7 h-7" />
            </button>
        </div>
    </main>

    <EditReservationModal :visible="edit" :id="identifier" />
    <DeleteModal :id="identifier" :visible="remove" :deleteReservation="reservations.deleteReservation">
        Esta acción no se puede deshacer. Esto eliminará permanentemente el
        ticket/reservación y removera los datos asociados a
        nuestros servicios.
    </DeleteModal>
</template>