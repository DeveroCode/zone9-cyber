<script setup>
import { ref, inject, watch, onMounted } from 'vue';
import { adminStore } from '@/stores/AdminStore';
import { reset } from '@formkit/core'
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import UserTable from '@/components/Tables/UsersTable.vue';
import ErrorAlertModal from '@/components/Modals/ErrorAlertModal.vue';
import CreateAccountModal from '@/components/Modals/CreateAccountModal.vue';

const services = adminStore();
const visible = ref(false);
const addAccount = ref(false);
const toast = inject('toast');
const word = ref('');

onMounted(async () => {
    await services.getAllUser();
});

watch(word, async (newWord) => {
    if (newWord === '') {
        await services.getAllUser();
    }
});

const handleViewModal = () => {
    visible.value = !visible.value
};
const handleCreateAccountModal = () => {
    addAccount.value = !addAccount.value
};
const handleSubmitData = async () => {
    if (word.value === '') {
        toast.error('Ingresa un nombre para buscar', { duration: 2000 })
    } else {
        const response = await services.searchEmployee(word.value);
        if (response.success) {
            toast.success(response.message, { duration: 2000 })
        } else {
            handleViewModal();
        }
    }
};
</script>

<template>
    <main class="mt-10">
        <section class="my-3 flex items-center justify-between">
            <form class="flex items-center gap-3" @submit.prevent="handleSubmitData">
                <input type="text" name="word" v-model="word" placeholder="Buscar empleado Ej: Juan Perez"
                    class="rounded-md border-gray-200 shadow px-3 py-2 dark:text-white dark:border-secondary-dark dark:placeholder-gray-400 dark:bg-gray-600 w-64 focus:outline-none focus:ring-0 focus:border-gray-300" />

                <button class=" text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md
            my-4 border border-primary-dash dark:border-0 shadow">
                    <MagnifyingGlassIcon class="w-5 h-5 mt-1" type="submit" /> Buscar
                </button>
            </form>
            <button
                class="text-white flex items-center justify-center gap-3 bg-secondary px-5 py-2 rounded-md my-4 border border-primary-dash dark:border-0"
                @click="handleCreateAccountModal">
                <PlusIcon class="w-5 h-5 mt-1" /> Agregar Empleado
            </button>
        </section>

        <UserTable :users="services.users" :deleteAccount="services.deleteAccount"
            :updatePassword="services.updatePassword" :getUserById="services.getUserById" :user="services.user"
            :updateUser="services.updateUser" v-if="services.users.length > 0" />


        <p class="text-center text-gray-600 text-2xl font-semibold" v-else>Aún no hay empelado registrados, por favor
            registra
            a un nuevo
            empleado</p>
    </main>


    <ErrorAlertModal :visible="visible" @update:visible="handleViewModal" />
    <CreateAccountModal :visible="addAccount" @update:visible="handleCreateAccountModal" />
</template>