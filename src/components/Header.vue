<script setup>
import logo from '/img/logo-sin-texto.svg'
</script>

<template>
    <header class="bg-primary py-3 px-10 flex justify-between items-center">
        <div>
            <img :src="logo" class="w-24 h-24" alt="Zona9.com Logo">
        </div>

        <nav class="space-x-5 font-semibold text-lg text-secondary">
            <a href="#">Acerca de</a>
            <a href="#">Servicios</a>
            <a href="#">Más</a>
            <a href="#">Contacto</a>
        </nav>
    </header>
</template>