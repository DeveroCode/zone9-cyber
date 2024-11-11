<script setup>
import { inject } from 'vue';
import { roles } from '@/data/role';
import { adminStore } from '@/stores/AdminStore';
import Dialog from 'primevue/dialog';

const toast = inject('toast');
const services = adminStore();

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['update:visible']);

const closeModal = () => {
    emit('update:visible', false);
};

const handleCreateAccount = async ({ ...formData }) => {
    const response = await services.createAccount(formData);
    if (response.success) {
        closeModal();
        toast.success(response.message, { duration: 2000 });
    } else {
        toast.error(response.message, { duration: 2000 });
    }
};
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="visible" modal :closable="false" :style="{ width: '30rem' }" class="bg-white rounded-md">
            <div
                class="flex justify-between items-center bg-secondary-dark px-10 rounded-tl-md rounded-tr-md py-4 text-white">
                <h2 class="text-xl font-bold">Agregar Nuevo Cuenta</h2>
                <button class="text-xl" @click="closeModal">x</button>
            </div>

            <FormKit type="form" :actions="false" form-class="p-10" @submit="handleCreateAccount">
                <legend class="text-secondary-dark font-bold text-lg space-y-2">Información</legend>
                <legend class="pb-2 text-md text-secondary">Completa los siguientes datos para agregar a un nuevo
                    empleado o
                    administrador
                </legend>
                <fieldset class="flex gap-3 py-5">
                    <FormKit type="text" name="name" placeholder="Incluya un Nombre" label="Nombre" />
                    <FormKit type="text" name="last_name" placeholder="Incluya un apellido" label="Apellido" />
                </fieldset>
                <FormKit type="email" name="email" placeholder="Correo" label="Correo" />
                <fieldset class="flex justify-between gap-3 pt-4">
                    <FormKit type="select" name="type_user" input-class="capitalize w-48"
                        :options="roles.map(role => ({ label: role.name, value: role.name }))" label="Rol" />
                    <FormKit type="password" name="password" placeholder="Contraseña" label="Contraseña" />
                </fieldset>

                <FormKit type="submit" label="Agregar Cuenta" input-class="bg-secondary-dark text-white py-[10px]" />
            </FormKit>
        </Dialog>
    </div>
</template>