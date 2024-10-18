<script setup>
import { ref, inject } from 'vue';
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


const handleSubmit = ({ ...fromData }) => {
    user.value = fromData;
    services.calculateTotalHours(user.value.start, user.value.end);
    folio.value = generateFolio(user.value.name, user.value.last_name, user.value.pc);

    try {
        const result = services.reservation({ ...fromData, folio: folio.value, total_hours: services.total_hours, total_mount: services.total_pay });
        handleViewModal();
        toast.success(result.response.message);
    } catch (error) {
        console.log(error);
        toast.error('Error al realizar la reserva, por favor intente más tarde');
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
        :hours="services.total_hours" :pc="user.pc" :folio="folio" :total_pay="services.total_pay" />
</template>