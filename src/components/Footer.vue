<script setup>
const getYear = () => new Date().getFullYear()
</script>

<template>
    <footer class="p-6 md:p-10 bg-secondary flex flex-col md:flex-row justify-between items-center">
        <span class="text-sm text-white text-center md:text-left">
            © {{ getYear() }} Zona9.com - Todos los derechos reservados ❤️ DeveroCode
        </span>

        <nav class="text-sm text-white space-x-5 mt-4 md:mt-0">
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Privacidad</a>
        </nav>
    </footer>
</template>