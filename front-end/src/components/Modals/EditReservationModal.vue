<script setup>
import { ref, inject, watch, defineProps, reactive } from 'vue';
import { usePcServices } from '@/stores/PcServices';
import { formatCurrency } from '@/helpers';
import Dialog from 'primevue/dialog';

const pcReservations = usePcServices();
const toast = inject('toast');

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    visible: {
        type: Boolean,
        default: false,
    },
});

function reset() {

}
const modalVisible = ref(props.visible);

watch(() => pcReservations.oldReservation.end, (newVal) => {
    pcReservations.oldReservation.end = 0;
    pcReservations.oldReservation.end = newVal;
});

watch(() => props.visible, (newVal) => {
    modalVisible.value = newVal;
});
const loadChanges = () => {
    pcReservations.updateData();
};

const handleSubmit = async () => {
    const dataFormat = {
        total_amount: pcReservations.oldReservation.total_amount,
        total_hours: pcReservations.oldReservation.total_hours,
        end: pcReservations.oldReservation.end,
    }
    const response = await pcReservations.updateReservation(props.id, dataFormat);

    if (response.success) {
        closeModal();
        toast.success(response.message, { duration: 2000 });
    } else {
        toast.error(response.message, { duration: 2000 });
    }
}
const closeModal = () => {
    modalVisible.value = false;
};
</script>

<template>
    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="modalVisible" modal :closable="false" :style="{ width: '22rem' }" class="z-50">
            <div class="flex justify-between items-center bg-black text-white py-4 px-10 rounded-t-md">
                <h2 class="text-xl font-bold text-center">Ticket de Servicio</h2>
                <button @click="closeModal">x</button>
            </div>

            <section class="bg-white py-8 px-10 rounded-b-md">
                <FormKit type="form" :actions="false" @submit="handleSubmit">
                    <legend>Información</legend>

                    <fieldset class="space-y-4 mt-4">
                        <FormKit type="time" label="Aumentar Tiempo (minutos/hora)" name="time"
                            v-model="pcReservations.oldReservation.end" label-class="text-secondary-dark" min="09:00"
                            max="23:59" @change="loadChanges" />
                        <FormKit type="text" name="extra" v-model="pcReservations.differencePay" label="Cargo extra"
                            label-class="text-secondary-dark" />
                    </fieldset>

                    <FormKit type="submit" label="Confirmar" value="payAmount"
                        input-class="bg-secondary-dark text-white" />
                </FormKit>

                <hr class="my-4">

                <div class="space-y-2 text-secondary-dark font-semibold">
                    <div class="flex justify-between">
                        <p>Precio anterior</p>
                        <span>{{ formatCurrency(pcReservations.original.total_amount) }}</span>
                    </div>
                    <div class="flex justify-between">
                        <p>Diferencia de pago</p>
                        <span>{{ pcReservations.differencePay ? pcReservations.differencePay : formatCurrency(0)
                            }}</span>
                    </div>
                    <div class="flex justify-between pt-4 font-bold">
                        <p class="text-2xl">Nueva Tarifa</p>
                        <span class="text-2xl">{{ pcReservations.differencePay ?
                            formatCurrency(pcReservations.oldReservation.total_amount) :
                            formatCurrency(0) }}</span>
                    </div>
                </div>
            </section>
        </Dialog>
    </div>
</template>
