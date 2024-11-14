<script setup>
import { ref, watch, inject, onMounted, defineEmits } from 'vue';
import { formatCurrency } from '@/helpers';
import Dialog from 'primevue/dialog';
const props = defineProps({
    stat: {
        type: Array,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
    totalConfirmed: {
        type: Number,
        required: true
    },
    totalAmountConfirmedCount: {
        type: Number,
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
        <Dialog :visible="visible" modal :closable="false" :style="{ width: '40rem' }"
            class="bg-white py-8 rounded-md px-10">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-secondary">Resumenes de Gananacias Mensuales</h2>
                    <span class="block mt-3 text-sm text-gray-500">Comparativa entre la ganancia total esperada y la
                        ganancia real
                        basada en
                        reservas
                        confirmadas.</span>
                </div>
                <button class="text-secondary text-xl mb-14" @click="closeModal">x</button>
            </div>

            <div class="flex justify-between gap-4">
                <div class="rounded-md border border-gray-300 py-3 px-4 mt-4 w-1/2">
                    <h2 class="font-bold">Ganancia Total</h2>
                    <p class="font-bold mt-2 text-2xl block">
                        {{ props.stat.length > 0 ? formatCurrency(props.stat[0].cuantity.value) : 'N/A' }}
                    </p>
                    <span class="text-gray-400 text-xs line-clamp-4 mt-3">Ganancias estimadas por mes, si las reservas
                        se confirman</span>
                </div>
                <div class="rounded-md border border-gray-300 py-3 px-4 mt-4 w-1/2">
                    <h2 class="font-bold">Ganancia Real</h2>
                    <p class="font-bold mt-2 text-2xl block">
                        {{ formatCurrency(props.totalAmountConfirmedCount) }}
                    </p>
                    <span class="text-gray-400 text-xs line-clamp-4 mt-3">Ganancias estimadas por mes, se confirmaron {{
                        props.totalConfirmed
                    }}
                        reservaciones en el mes</span>
                </div>
            </div>
        </Dialog>
    </div>
</template>
