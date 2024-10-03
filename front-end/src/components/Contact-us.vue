<script setup>
</script>

<template>
    <form action="#" class="border border-gray-300 bg-white shadow-lg p-6 md:p-10 rounded-xl flex flex-col">
        <fieldset class="mb-10">
            <h3 class="text-2xl text-center md:text-start md:text-4xl font-bold text-secondary">Póngase en Contacto</h3>
            <span class="text-gray-500 text-center text-lg mt-2 block">En cualquier momento</span>
        </fieldset>

        <fieldset class="flex flex-col md:flex-row gap-5 mb-4">
            <input type="text" placeholder="Nombre"
                class="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-xl mb-4 md:mb-0">
            <input type="text" placeholder="Apellidos"
                class="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-xl mb-4 md:mb-0">
        </fieldset>

        <fieldset class="flex flex-col mb-4">
            <input type="email" placeholder="Email" class="w-full border border-gray-300 px-4 py-2 rounded-xl mb-4">
            <input type="phone" placeholder="Teléfono" class="w-full border border-gray-300 px-4 py-2 rounded-xl mb-4">
        </fieldset>

        <textarea name="" cols="30" rows="5" id="" class="w-full mb-4 border border-gray-300 px-4 py-2 rounded-xl"
            placeholder="Comentarios"></textarea>

        <button type="submit" class="text-secondary font-bold text-lg py-2 px-8 rounded-full bg-primary">
            Enviar comentarios
        </button>
    </form>
</template>