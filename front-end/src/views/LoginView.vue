<script setup>
import Administrator from '/img/administrator.svg';
import LoginForm from '@/components/Forms/LoginForm.vue';
import Waves from '@/components/parallax/Waves.vue';
</script>

<template>
    <!-- Contenedor Principal -->
    <main class="relative max-w-7xl mx-auto flex justify-between items-center gap-10 my-16 z-10">
        <!-- Formulario -->
        <div class="bg-white shadow-md p-10 rounded-lg border border-gray-300 w-1/2 relative z-20">
            <h2 class="text-3xl font-bold text-secondary mb-6 capitalize">Acceso Administrador</h2>
            <span class="block mb-8 text-sm text-secondary">Ey, introduce tus datos para acceder a tu cuenta</span>
            <LoginForm />
        </div>

        <!-- Imagen de administrador -->
        <div class="relative z-1 w-1/2">
            <img :src="Administrator" alt="imagen representativa de un administrador"
                class="h-auto max-w-full animate-float">
        </div>
    </main>

    <!-- Ondas de fondo -->
    <div class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <Waves />
    </div>
</template>

<style scoped>
.animate-float {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}
</style>
