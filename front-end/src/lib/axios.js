import axios from 'axios';

const clienteApi = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
    },

    withCredentials: true,
});

export default clienteApi