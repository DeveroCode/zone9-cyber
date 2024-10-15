import { defineStore } from "pinia";
import { ref, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
import APIAuth from "@/services/APIAuth";

export const authMethods = defineStore('authMethods', () => {
    const toast = inject('toast');
    const user = ref({});
    const router = useRouter();

    onMounted(async () => {
        try {
            const { data } = await APIAuth.dataUser();
            user.value = data
        } catch (error) {
            console.log('Error al obtener los datos del usuario', error);
        }
    });

    async function login(login) {
        try {
            const { data } = await APIAuth.login(login);
            localStorage.setItem('token', data.token);
            toast.success('Bienvenido', { duration: 2000 });
            router.push({ name: 'dashboard' });
        } catch (error) {
            console.log(error);
        }
    }


    return {
        user,
        login,
    }
})