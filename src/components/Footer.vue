<script setup>
const getYear = () => new Date().getFullYear()
</script>

<template>
    <footer class="p-5 bg-secondary flex justify-between px-4">
        <span class="text-sm text-white">© {{ getYear() }} Zona9.com - Todos los derechos reservados ❤️
            DeveroCode</span>

        <nav class="text-sm text-white space-x-5">
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Privacidad</a>
        </nav>
    </footer>
</template>