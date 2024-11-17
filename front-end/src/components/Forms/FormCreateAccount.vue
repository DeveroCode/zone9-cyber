<script setup>
</script>

<template>
    <div class="bg-white dark:bg-primary-dash rounded-md shadow-lg dark:border p-10 dark:border-secondary space-y-10">
        <legend class="text-3xl font-semibold text-secondary dark:text-white">Gestión de Cuentas</legend>
        <FormKit type="form" :actions="false">
            <div class="flex gap-3 items-center">
                <!-- Campo de Nombre -->
                <FormKit type="text" label="Nombre" label-class="dark:text-white 2xl:w-[350px] md:w-[300px]"
                    placeholder="Carlos" />

                <!-- Campo de Apellido -->
                <FormKit type="text" label="Apellido" label-class="dark:text-white 2xl:w-[350px] md:w-[300px]"
                    placeholder="Perez" />

                <!-- Campo de Email -->
                <FormKit type="email" label="Email" label-class="dark:text-white 2xl:w-[350px] md:w-[300px]"
                    placeholder="test@test.com" />
            </div>

            <!-- Botón Agregar Cuenta -->
            <div class="w-[280px]">
                <FormKit type="submit" label="Agregar Cuenta"
                    input-class="text-white bg-secondary text-xs py-[8px] rounded-xs" />
            </div>
        </FormKit>
    </div>
</template>