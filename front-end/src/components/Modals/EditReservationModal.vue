<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { usePcServices } from '@/stores/PcServices';
import { formatCurrency, toggleModal } from '@/helpers';
import Dialog from 'primevue/dialog';
const pcReservations = usePcServices();


defineProps({
    visible: {
        type: Boolean,
        default: false
    }
});

const payAmount = computed(() => {
    return pcReservations.serviceData.differencePay ? pcReservations.serviceData.differencePay : 0;
});

const loadChanges = () => {
    pcReservations.calculateChanges(pcReservations.serviceData.new_time, pcReservations.serviceData.start);
};
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="visible" modal :closable="false" :style="{ width: '22rem' }" class="z-50">
            <div class="flex justify-between items-center bg-black text-white py-4 px-10 rounded-t-md">
                <h2 class="text-xl font-bold text-center">Ticket de Servicio</h2>
                <button @click="toggleModal(visible)">x</button>
            </div>

            <section class="bg-white py-8 px-10 rounded-b-md">
                <FormKit type="form" :actions="false" submit-label="Enviar">
                    <legend>Información</legend>

                    <fieldset class="space-y-4 mt-4">
                        <FormKit type="time" label="Aumentar Tiempo (minutos/hora)" name="time"
                            v-model="pcReservations.serviceData.new_time" label-class="text-secondary-dark" min="09:00"
                            max="23:59" @change="loadChanges" />
                        <FormKit type="number" name="extra" v-model="payAmount" label="Cargo extra"
                            label-class="text-secondary-dark" />
                    </fieldset>

                    <FormKit type="submit" label="Confirmar" value="payAmount"
                        input-class="bg-secondary-dark text-white" />
                </FormKit>

                <hr class="my-4">

                <div class="space-y-2 text-secondary-dark font-semibold">
                    <div class="flex justify-between">
                        <p>Precio anterior</p>
                        <span>{{ formatCurrency(pcReservations.serviceData.old_amount) }}</span>
                    </div>
                    <div class="flex justify-between">
                        <p>Cargos Extras</p>
                        <span>{{ formatCurrency(payAmount) }}</span>
                    </div>
                    <div class="flex justify-between pt-4 font-bold">
                        <p class="text-2xl">Nueva Tarifa</p>
                        <span class="text-2xl">{{ formatCurrency(pcReservations.newPay) }}</span>
                    </div>
                </div>
            </section>
        </Dialog>
    </div>
</template>
