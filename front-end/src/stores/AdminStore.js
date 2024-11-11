import { defineStore } from "pinia";
import { onMounted, ref } from 'vue';
import APIAdmin from "@/services/APIAdmin";

export const adminStore = defineStore('adminStore', () => {
    const users = ref({});
    const user = ref({});

    onMounted(async () => {
        try {
            await getAllUser();
        } catch (error) {
            console.log('Error al obtener los datos del usuario', error);
        }
    });

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

    return {
        getAllUser,
        users,
        updatePassword,
        searchEmployee
    }
});