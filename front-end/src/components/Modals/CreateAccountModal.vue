<script setup>
import { inject, reactive, computed, watch } from 'vue';
import { roles } from '@/data/role';
import { adminStore } from '@/stores/AdminStore';
import Dialog from 'primevue/dialog';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    editUser: {
        type: Object,
        required: false,
        default: null
    },
    updateUser: {
        type: Function,
        required: true
    }
});

const toast = inject('toast');
const services = adminStore();
const formData = reactive({
    'name': '',
    'last_name': '',
    'email': '',
    'password': '',
    'type_user': '',
});

const user = computed(() => props.editUser);
const emit = defineEmits(['update:visible']);

watch(user, (newUser) => {
    if (newUser) {
        Object.assign(formData, newUser);
    } else {
        Object.keys(formData).forEach(key => formData[key] = '');
    }
}, { immediate: true });

const closeModal = () => {
    emit('update:visible', false);
};

const handleCreateAccount = async () => {
    let response;

    if (user.value) {
        response = await props.updateUser({ ...formData });
        if (response.success) {
            closeModal();
            toast.success(response.message, { duration: 2000 });
        } else {
            toast.error(response.message, { duration: 2000 });
        }
    } else {
        response = await services.createAccount({ ...formData });
        if (response.success) {
            closeModal();
            toast.success(response.message, { duration: 2000 });
        } else {
            toast.error(response.message, { duration: 2000 });
        }
    }
};
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog :visible="visible" modal :closable="false" :style="{ width: '30rem' }" class="bg-white rounded-md">
            <div
                class="flex justify-between items-center bg-secondary-dark px-10 rounded-tl-md rounded-tr-md py-4 text-white">
                <h2 class="text-xl font-bold">{{ props.editUser ? 'Editar Cuenta' : 'Crear Cuenta' }}</h2>
                <button class="text-xl" @click="closeModal">x</button>
            </div>

            <FormKit type="form" :actions="false" form-class="p-10" @submit="handleCreateAccount">
                <legend class="text-secondary-dark font-bold text-lg space-y-2">Información</legend>
                <legend class="pb-2 text-md text-secondary">Completa los siguientes datos para agregar a un nuevo
                    empleado o
                    administrador
                </legend>
                <fieldset class="flex gap-3 py-5">
                    <FormKit type="text" name="name" v-model="formData.name" placeholder="Incluya un Nombre"
                        label="Nombre" />
                    <FormKit type="text" name="last_name" v-model="formData.last_name" placeholder="Incluya un apellido"
                        label="Apellido" />
                </fieldset>
                <FormKit type="email" name="email" v-model="formData.email" placeholder="Correo" label="Correo" />
                <fieldset class="flex justify-between gap-3 pt-4">
                    <div :class="props.editUser ? 'w-full' : 'w-56'">
                        <FormKit type="select" v-model="formData.type_user" name="type_user" input-class="capitalize"
                            :options="roles.map(role => ({ label: role.name, value: role.name }))" label="Rol" />
                    </div>
                    <div :class="props.editUser ? 'hidden' : ''">
                        <FormKit type="password" v-model="formData.password" name="password" placeholder="Contraseña"
                            label="Contraseña" />
                    </div>
                </fieldset>

                <FormKit type="submit" label="Agregar Cuenta" input-class="bg-secondary-dark text-white py-[10px]" />
            </FormKit>
        </Dialog>
    </div>
</template>