<script setup>
import { ref, watch } from 'vue';
import { toggleModal } from '@/helpers';
import ForgetPasswordModal from '@/components/Modals/ForgetPasswordModal.vue';

const visible = ref(false);
const handleViewModal = () => {
    toggleModal(visible);
};
</script>

<template>
    <FormKit type="form" :actions="false" form-class="py-10">
        <fieldset class="space-y-7">
            <FormKit type="email" name="email" label="Introduce tu correo" placeholder="Correo" />
            <FormKit type="password" name="password" label="Introduce tu contraseña" placeholder="Contraseña" />
        </fieldset>

        <span @click="handleViewModal()"
            class="text-secondary text-base inline-flex items-center gap-4 border-b-2 mt-10 pb-2 cursor-pointer border-primary transition-all duration-300 group hover:text-primary">
            ¿Olvidaste tu contraseña?
        </span>
        <fieldset class="w-full flex justify-end items-center">
            <FormKit type="submit" label="Iniciar" input-class="rounded-md" />
        </fieldset>
    </FormKit>

    <ForgetPasswordModal :visible="visible" :handleViewModal="handleViewModal" />
</template>
