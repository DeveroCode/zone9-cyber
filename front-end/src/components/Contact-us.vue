<script setup>
</script>

<template>
    <FormKit type="form" :actions="false" submit-label="Enviar"
        form-class="border border-gray-300 bg-white shadow-lg p-6 md:p-10 rounded-xl space-y-5">
        <fieldset class="mb-10">
            <h3 class="text-2xl text-center md:text-4xl font-bold text-secondary">Póngase en Contacto</h3>
            <span class="text-gray-500 text-center text-lg mt-2 block">En cualquier momento</span>
        </fieldset>

        <fieldset class="flex gap-3">
            <FormKit type="text" name="name" placeholder="Incluya un Nombre" />
            <FormKit type="text" name="last_name" placeholder="Incluya un apellido" />
        </fieldset>
        <FormKit type="email" name="email" placeholder="Correo " />
        <FormKit type="tel" name="phone" placeholder="Teléfono " />
        <FormKit type="textarea" name="message" placeholder="Comentarios" rows="5" />

        <FormKit type="submit" label="Enviar Comentario" />
    </FormKit>
</template>