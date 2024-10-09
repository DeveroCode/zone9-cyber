<script setup>
import Dialog from 'primevue/dialog';
import { formatCurrency } from '@/helpers';
import Button from '@/components/Links and Buttons/SecondButton.vue';

defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    handleViewModal: {
        type: Function,
        required: true
    },
    name: {
        type: String
    },
    last_name: {
        type: String
    },
    hours: {
        type: String
    },
    pc: {
        type: String
    },
    folio: {
        type: String
    },
    total_pay: {
        type: String
    }
});
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="visible" :style="{ width: '25rem' }" class="bg-white rounded-md shadow-md p-8 flex"
            :closable="false">
            <div class="flex justify-between items-center">
                <span class="text-secondary text-2xl font-semibold">Factura</span>
                <button class="text-secondary font-bold mt-1" @click="handleViewModal(visible)">X</button>
            </div>

            <div class="my-8 space-y-5">
                <div class="border-b border-gray-300 pb-2">
                    <p class="text-secondary text-xs font-semibold mb-3">Nombre del cliente</p>
                    <span class="text-secondary text-2xl font-bold uppercase">{{ name }} {{ last_name }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-300 pb-2">
                    <div>
                        <p class="text-secondary text-xs font-semibold mb-3">Total Horas</p>
                        <span class="text-secondary text-xl font-bold uppercase">{{ hours }} Hrs</span>
                    </div>
                    <div>
                        <p class="text-secondary text-xs font-semibold mb-3">Total</p>
                        <span class="text-secondary text-xl font-bold uppercase">{{ formatCurrency(total_pay) }}</span>
                    </div>
                </div>
                <div class="flex justify-between border-b border-gray-300 pb-2">
                    <div>
                        <p class="text-secondary text-xs font-semibold mb-3">Computadora Seleccionada</p>
                        <span class="text-secondary text-xl font-bold uppercase">{{ pc }}</span>
                    </div>
                    <div>
                        <p class="text-secondary text-xs font-semibold mb-3">Folio</p>
                        <span class="text-secondary text-xl font-bold uppercase">{{ folio }}</span>
                    </div>
                </div>
            </div>

            <Button>Descargar imagen</Button>
        </Dialog>
    </div>
</template>