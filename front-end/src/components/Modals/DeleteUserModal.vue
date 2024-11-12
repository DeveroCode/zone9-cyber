<script setup>
import { inject } from 'vue';
import Dialog from 'primevue/dialog';

const toast = inject('toast');
const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    deleteAccount: {
        type: Function,
        required: true
    }
});

const emit = defineEmits(['update:visible']);
const closeModal = () => {
    emit('update:visible', false);
};

const deleteAccount = async () => {
    const response = await props.deleteAccount(props.id);

    if (response.success) {
        toast.success(response.message, { duration: 2000 });
    } else {
        toast.error(response.message, { duration: 2000 });
    }
    emit('update:visible', false);
};
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="visible" modal :closable="false" :style="{ width: '35rem' }"
            class="bg-white py-8 rounded-md px-10">
            <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold text-secondary">¿Estás seguro?</h2>
                <button class="text-secondary text-xl" @click="closeModal">x</button>
            </div>

            <p class="text-gray-600 mt-10">¿Estás seguro de que deseas eliminar a este usuario? Esta acción no se puede
                deshacer</p>


            <div class="flex justify-end mt-10 space-x-5">
                <button class="border border-secondary-dark px-5 py-2 rounded-md" @click="closeModal">Cancelar</button>
                <button class="text-white bg-secondary-dark px-5 py-2 rounded-md"
                    @click="deleteAccount">Eliminar</button>
            </div>
        </Dialog>
    </div>
</template>