<script setup>
import Dialog from 'primevue/dialog';
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog visible="true" modal :closable="false" :style="{ width: '30rem' }"
            class="bg-white py-8 rounded-md px-10">
            <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold text-secondary">¿Olvidaste tu contraseña?</h2>
                <button class="text-secondary text-xl">x</button>
            </div>

            <p class="text-gray-600 mt-10">Si has olvidado tus credenciales o no recuerdas tu contraseña actual, te
                invitamos a ponerte en contacto con tu administrador para restablecer o actualizar tu contraseña.</p>

            <div class="bg-gray-100 py-10 px-6 mt-4 rounded-md flex items-center gap-3">
                <DevicePhoneMobileIcon class="w-20 h-20 text-secondary" />
                <div>
                    <p>Via télefono:</p>
                    <span class="text-xl font-bold">6365363244</span>
                </div>
            </div>
            <div class="bg-gray-100 py-10 px-6 mt-4 rounded-md flex items-center gap-3">
                <EnvelopeIcon class="w-20 h-20 text-secondary" />
                <div>
                    <p>Correo:</p>
                    <span class="text-xl font-bold">sergio_apodaca@hotmail.com</span>
                </div>
            </div>
        </Dialog>
    </div>
</template>