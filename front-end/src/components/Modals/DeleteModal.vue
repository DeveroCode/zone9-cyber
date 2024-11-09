<script setup>
import { ref, watch, inject } from 'vue';
import Dialog from 'primevue/dialog';

const toast = inject('toast');
const props = defineProps({
    visible: {
        type: Boolean
    },
    deleteReservation: {
        type: Function,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

const modalVisible = ref(props.visible);

watch(() => props.visible, (newVal) => {
    modalVisible.value = newVal;
});

const closeModal = () => {
    modalVisible.value = false;
};

const handleAcceptAction = async () => {
    modalVisible.value = false;
    const result = await props.deleteReservation(props.id);

    if (result.success) {
        toast.success(result.message, { duration: 2000 });
    } else {
        toast.error(result.message, { duration: 2000 });
    }
};
</script>

<template>
    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="modalVisible" modal :closable="false" :style="{ width: '35rem' }"
            class="bg-white py-8 rounded-md px-10">
            <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold text-secondary">¿Estás seguro?</h2>
                <button @click="closeModal" class="text-secondary text-xl">x</button>
            </div>

            <p class="text-gray-600 mt-10">Esta acción no se puede deshacer. Esto eliminará permanentemente el
                ticket/reservación y removera los datos asociados a
                nuestros servicios.</p>


            <div class="flex justify-end mt-10 space-x-5">
                <button class="border border-secondary-dark px-5 py-2 rounded-md">Cancelar</button>
                <button class="text-white bg-secondary-dark px-5 py-2 rounded-md"
                    @click="handleAcceptAction">Eliminar</button>
            </div>
        </Dialog>
    </div>
</template>
