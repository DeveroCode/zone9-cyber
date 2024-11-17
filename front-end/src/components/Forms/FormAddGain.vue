<script setup>
</script>

<template>
    <div class="bg-white dark:bg-primary-dash rounded-md shadow-lg dark:border p-10 dark:border-secondary space-y-10">
        <legend class="text-3xl font-semibold text-secondary dark:text-white">Registros de Ganancias</legend>
        <FormKit type="form" :actions="false">
            <div class="flex gap-3 items-center">
                <!-- Campo de Nombre -->
                <FormKit type="text" label="Fuente" label-class="dark:text-white 2xl:w-[350px] md:w-[300px]"
                    placeholder="Fuente de ganancia" />

                <!-- Campo de Apellido -->
                <FormKit type="number" min="10" label="Monto" label-class="dark:text-white 2xl:w-[350px] md:w-[300px]"
                    placeholder="$0.00" />

                <!-- Campo de Email -->
                <FormKit type="date" label="Fecha" label-class="dark:text-white 2xl:w-[350px] md:w-[300px]" />
            </div>

            <!-- Botón Agregar Cuenta -->
            <div class="w-[280px]">
                <FormKit type="submit" label="Registrar Gasto"
                    input-class="text-white bg-secondary text-xs py-[8px] rounded-xs" />
            </div>
        </FormKit>
    </div>
</template>