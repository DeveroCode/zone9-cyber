<script setup>
import { PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon, PlusIcon, MagnifyingGlassIcon, CheckIcon } from '@heroicons/vue/24/outline';
defineProps({
    users: {
        type: Array,
        required: true
    }
});

const updatePassword = async ({ ...formData }) => {
    const response = await services.updatePassword({ ...formData });

    if (response.success) {
        toast.success(response.message, { duration: 2000 });
        reset('update-password');
    } else {
        toast.error(response.message, { duration: 2000 });
    }
};
</script>

<template>
    <table class="min-w-full table-auto rounded-xl overflow-hidden shadow-lg">
        <thead class="dark:bg-gray-700 dark:text-gray-300 text-secondary uppercase text-sm">
            <tr>
                <th class="px-4 py-3 text-left  w-2/12">Fecha de Ingreso</th>
                <th class="px-4 py-3 text-left w-1/4">Nombre Completo</th>
                <th class="px-4 py-3 text-left w-1/12">Nivel</th>
                <th class="px-4 py-3 text-left w-1/4">Actualizar Contraseña</th>
                <th class="px-4 py-3 text-left w-2/12">Herramientas</th>
            </tr>
        </thead>
        <tbody class="dark:bg-gray-800 dark:text-gray-100 text-secondary">
            <tr class="dark:hover:bg-gray-600 hover:bg-gray-100" v-for="user in users" :key="user.id">
                <td class="px-4 py-3">{{ user.created_at }}</td>
                <td class="px-4 py-3">{{ user.name }} {{ user.last_name }}</td>
                <td class="px-4 py-3 capitalize">{{ user.type_user }}</td>
                <td class="px-4 py-3 capitalize">
                    <FormKit type="form" :actions="false" @submit="updatePassword" id="update-password">
                        <fieldset class="flex items-center justify-between">
                            <FormKit type="password" name="password" placeholder="Password"
                                input-class="dark:border-secondary-dark dark:placeholder-gray-400 dark:bg-gray-600 w-64 focus:outline-none focus:ring-0 focus:border-gray-300" />
                            <FormKit type="hidden" name="id" v-model="user.id" />
                            <button class="py-2 px-3 text-white bg-secondary dark:bg-gray-600 rounded-md">
                                <CheckIcon class="w-5 h-5 mt-1" type="submit" />
                            </button>
                        </fieldset>
                    </FormKit>
                </td>
                <td class="px-4 py-3 text-center">
                    <button class="dark:text-white font-medium py-1 px-3">
                        <PencilSquareIcon class="w-5 h-5" />
                    </button>
                    <button class="text-red-800 font-medium py-1 px-3">
                        <TrashIcon class="w-5 h-5" />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>