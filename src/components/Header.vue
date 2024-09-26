<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logo from '/img/logo-sin-texto.svg'

const isOpen = ref(false);
const scroll = ref(0);
const hancliClickMenu = () => {
    isOpen.value = !isOpen.value
};

const handleScrollAnimation = () => {
    scroll.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScrollAnimation);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScrollAnimation);
});
</script>

<template>
    <header class="w-full px-10 flex items-center" @scroll="handleScrollAnimation"
        :class="scroll > 200 ? 'fixed bg-white shadow-lg transition duration-200 ease-in-out z-50' : 'relative transition-all duration-500 ease-in-out'">
        <!-- Logo a la izquierda -->
        <div class="flex items-center flex-shrink-0 justify-center md:justify-normal w-full md:w-auto"
            @click="hancliClickMenu">
            <img :src="logo" class="w-24 h-24" alt="Zona9.com Logo">
            <span class="font-bold text-2xl hidden md:block">Zona9</span>
        </div>

        <!-- Navegación centrada -->
        <nav class="hidden md:block absolute left-1/2 transform -translate-x-1/2 space-x-5 text-lg text-secondary">
            <a href="#">Acerca de</a>
            <a href="#">Servicios</a>
            <a href="#">Más</a>
            <a href="#">Contacto</a>
        </nav>

        <!-- Botones a la derecha -->
        <div class="hidden md:block ml-auto space-x-5">
            <button class="text-white py-2 px-10 rounded-full bg-secondary">Iniciar</button>
            <button class="text-secondary py-2 px-10 rounded-full bg-primary">Reserva</button>
        </div>


        <!-- Navegación centrada -->
        <nav class="md:hidden absolute top-0 left-[0px] transform -translate-x-1/2 text-lg text-secondary md:static block z-50 text-center"
            :class="isOpen ? 'bg-gray-50 shadow-lg rounded-lg p-4 block w-full mt-[90px] slide-in-top' : 'hidden md:block'">
            <a href="#" class="block py-1 px-5">Acerca de</a>
            <a href="#" class="block py-1 px-5">Servicios</a>
            <a href="#" class="block py-1 px-5">Más</a>
            <a href="#" class="block py-1 px-5">Contacto</a>

            <!-- Botones a la derecha -->
            <div class="mt-4 flex flex-col space-y-5">
                <button class="text-white py-2 px-10 rounded-full bg-secondary">Iniciar</button>
                <button class="text-secondary py-2 px-10 rounded-full bg-primary">Reserva</button>
            </div>
        </nav>
    </header>
</template>


<style scoped>
.slide-in-top {
    -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
</style>