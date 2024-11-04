<script setup>
import { ref, inject, nextTick } from 'vue';
import { generateFolio, toggleModal } from '@/helpers';
import { computers } from '@/data/computer';
import { usePcServices } from '@/stores/PcServices';
import Dialog from '@/components/Modals/ReservationModal.vue';


const services = usePcServices();
const visible = ref(false);
const toast = inject('toast');
const folio = ref('');
const user = ref({});
const handleViewModal = () => {
    toggleModal(visible);
}


const handleSubmit = async ({ ...formData }) => {
    user.value = formData;
    folio.value = generateFolio(formData.name, formData.last_name, formData.pc);
    services.onCreateReservation({ ...formData });
    await nextTick();
    const response = await services.reservation({ ...formData, folio: folio.value, total_hours: services.totalHours, total_amount: services.totalAmount });
    handleViewModal();
    if (response.success) {
        toast.success(response.response.message, { duration: 2000 });
    } else {
        toast.error(response.response.message, { duration: 2000 });
    }
};
</script>

<template>
    <FormKit type="form" :actions="false" submit-label="Enviar" @submit="handleSubmit"
        form-class="border border-gray-300 bg-white shadow-lg p-6 md:p-10 rounded-xl space-y-5 mx-auto max-w-lg">
        <fieldset class="flex gap-3">
            <FormKit type="text" name="name" placeholder="Incluya un Nombre" label="Nombre" />
            <FormKit type="text" name="last_name" placeholder="Incluya un apellido" label="Apellido" />
        </fieldset>
        <FormKit type="select" name="pc" :options="computers.map(pc => pc.name)" label="Computadora"
            input-class="text-secondary" />
        <FormKit type="tel" name="phone" placeholder="Teléfono" label="Ingresa un número de teléfono" />

        <fieldset class="flex justify-between gap-3">
            <legend class="text-bold text-secondary py-3 font-semibold text-md"><span class="font-black text-red-800">*
                </span>Especifica tu tiempo de uso en la máquina seleccionada.</legend>
            <FormKit type="time" name="start" label="Inicio" help="En que momento ira a la sucursal?" min="09:00"
                value="09:00" max="18:00" help-class="text-xs text-secondary" />
            <FormKit type="time" name="end" label="Fin" help="Hasta que hora deja la maquina?" min="09:00" max="18:00"
                value="18:00" help-class="text-xs text-secondary" />
        </fieldset>
        <FormKit type="submit" label="Reservar Maquina" />
        <p class="text-bold text-secondary py-3 font-semibold text-xs">
            Al hacer clic en <span class="font-bold text-red-700">Reservar Máquina</span>, la computadora quedará
            apartada, por lo
            que es importante
            que solo
            realices la reserva cuando estés listo para utilizarla.
        </p>
    </FormKit>

    <Dialog :visible="visible" :handleViewModal="handleViewModal" :name="user.name" :last_name="user.last_name"
        :hours="services.totalHours" :pc="user.pc" :folio="folio" :total_pay="services.totalAmount" />
</template>