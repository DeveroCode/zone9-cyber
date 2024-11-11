<script setup>
import Dialog from 'primevue/dialog';
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['update:visible']);

const closeModal = () => {
    emit('update:visible', false);
};
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="visible" modal :closable="false" :style="{ width: '30rem' }"
            class="bg-white py-8 rounded-md px-10 shadow-md border-gray-200 border-2">

            <ExclamationCircleIcon class="w-20 h-20 text-red-600 mx-auto" />

            <div class="mt-3">
                <h2 class="text-xl font-bold text-secondary text-center">Error al buscar empleado</h2>
                <p class="text-gray-600 text-center mt-3">No se ha encontrado ningún empleado que coincida con los
                    criterios de búsqueda. Por favor, verifica
                    la información ingresada e intenta nuevamente.</p>
            </div>

            <button
                class="text-white flex items-center justify-center gap-3 bg-red-600 px-5 py-2 rounded-md my-4 border dark:border-0 mx-auto"
                @click="closeModal">
                Aceptar
            </button>
        </Dialog>
    </div>
</template>