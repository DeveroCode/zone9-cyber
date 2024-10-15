import clienteApi from "@/lib/axios";
import { inject } from "vue";
const toast = inject('toast');


export async function middlware(to, from, next) {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const response = await clienteApi.get('/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.type_user === 'empleado') {
                next();
                toast.success(`Bienvenido ${response.data.name} ${response.data.last_name}`, { duration: 2000 });
            } else {
                toast.error('No tienes acceso', { duration: 2000 });
                next({ name: 'login' });
            }
        } catch (error) {
            console.log(error);
            next({ name: 'login' });
        }
    } else {
        next({ name: 'login' });
    }
}