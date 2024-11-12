import { defineStore } from "pinia";
import { onMounted, ref } from 'vue';
import APIAdmin from "@/services/APIAdmin";
import { usePcServices } from "@/stores/PcServices";

export const adminStore = defineStore('adminStore', () => {
    const users = ref({});
    const user = ref({});
    const services = usePcServices();

    onMounted(async () => {
        try {
            services.isLoading = true;
            await getAllUser();
            setTimeout(() => {
                services.isLoading = false;
            }, 800);
        } catch (error) {
            console.log('Error al obtener los datos del usuario', error);
        }
    });

    async function createAccount(data) {
        try {
            const response = await APIAdmin.create(data);
            await getAllUser();
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    async function getAllUser() {
        const { data } = await APIAdmin.getUser();
        users.value = data.data;
    }

    const updatePassword = async (data) => {
        try {
            const response = await APIAdmin.passwordForget(data.id, data);
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }


    async function searchEmployee(word) {
        try {
            const { data } = await APIAdmin.getUserByWord(word);
            users.value = data.data;
            return { success: true, message: 'Usuario encontrado con exito' };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    const deleteAccount = async (id) => {
        try {
            const response = await APIAdmin.delete(id);
            await getAllUser();
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    const updateUser = async (data) => {
        try {
            const response = await APIAdmin.update(data.id, data);
            await getAllUser();
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    return {
        createAccount,
        getAllUser,
        users,
        updatePassword,
        searchEmployee,
        deleteAccount,
        updateUser
    }
});