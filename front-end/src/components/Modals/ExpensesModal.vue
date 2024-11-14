<script setup>
import { ref, watch, inject, onMounted, computed } from 'vue';
import { formatCurrency } from '@/helpers';
import Dialog from 'primevue/dialog';
const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    totalNotConfirmed: {
        type: Number,
        required: true
    },
    stats: {
        type: Number,
        required: true
    },
    totalNotConfirmedCount: {
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
                    <h2 class="text-xl font-bold text-secondary">Resumen de Perdidas Mensuales</h2>
                    <span class="block mt-3 text-sm text-gray-500">Comparativa entre la perdida total esperada y la
                        perdida real
                        basada en
                        reservas no
                        confirmadas.</span>
                </div>
                <button class="text-secondary text-xl mb-14" @click="closeModal">x</button>
            </div>

            <div class="flex justify-between gap-4">
                <div class="rounded-md border border-gray-300 py-3 px-4 mt-4 w-1/2">
                    <h2 class="font-bold">Perdida Total</h2>
                    <p class="font-bold mt-2 text-2xl block">
                        {{ formatCurrency(props.stats[0].cuantity.value) }}
                    </p>
                    <span class="text-gray-400 text-xs line-clamp-4 mt-3">Perdidas estimadas por mes, si las reservas
                        se confirman</span>
                </div>
                <div class="rounded-md border border-gray-300 py-3 px-4 mt-4 w-1/2">
                    <h2 class="font-bold">Perdida Real</h2>
                    <p class="font-bold mt-2 text-2xl block">
                        {{ formatCurrency(props.totalNotConfirmed) }}
                    </p>
                    <span class="text-gray-400 text-xs line-clamp-4 mt-3"
                        v-if="props.totalNotConfirmedCount === 1">Perdidas estimadas por mes, se perdio {{
                            props.totalNotConfirmedCount
                        }}
                        reservación en el mes</span>
                    <span class="text-gray-400 text-xs line-clamp-4 mt-3" v-else>Perdidas estimadas por mes, se
                        perdieron
                        {{
                            props.totalNotConfirmedCount
                        }}
                        reservaciones en el mes</span>
                </div>
            </div>
        </Dialog>
    </div>
</template>
