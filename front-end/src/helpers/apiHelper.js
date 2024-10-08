import clienteApi from "@/lib/axios";

export const authorization = (method, url, data = null) => {
    const token = localStorage.getItem('token');

    const config = {
        method, url, headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    if (data) {
        config.data = data;
    }

    return clienteApi(config);
}