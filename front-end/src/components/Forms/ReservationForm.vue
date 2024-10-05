<script setup>
import { computers } from '@/data/computer';

const handleSubmit = ({ ...fromData }) => {
    console.log(fromData);
}
</script>

<template>
    <FormKit type="form" :actions="false" submit-label="Enviar" @submit="handleSubmit"
        form-class="border border-gray-300 bg-white shadow-lg p-6 md:p-10 rounded-xl space-y-5 mx-auto">
        <fieldset class="flex gap-3">
            <FormKit type="text" name="name" placeholder="Incluya un Nombre" label="Nombre" />
            <FormKit type="text" name="last_name" placeholder="Incluya un apellido" label="Apellido" />
        </fieldset>
        <FormKit type="select" name="computer" :options="computers.map(pc => pc.name)" label="Computadora" />
        <FormKit type="tel" name="phone" placeholder="Teléfono" label="Ingresa un número de teléfono" />

        <fieldset class="flex justify-between gap-3">
            <legend class="text-bold text-secondary py-3 font-semibold text-md"><span class="font-black text-red-800">*
                </span>Especifica tu tiempo de uso en la máquina seleccionada.</legend>
            <FormKit type="time" name="start" label="Inicio" help="En que momento ira a la sucursal?" min="09:00"
                value="09:00" max="18:00" help-class="text-xs" />
            <FormKit type="time" name="end" label="Fin" help="Hasta que hora deja la maquina?" help-class="text-xs"
                min="09:00" max="18:00" value="18:00" />
        </fieldset>
        <FormKit type="submit" label="Reservar Maquina" />
    </FormKit>
</template>