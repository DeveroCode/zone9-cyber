<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Link from '@/components/Links and Buttons/Link.vue';
import Button from '@/components/Links and Buttons/Buttons.vue';
import SecondButton from '@/components/Links and Buttons/SecondButton.vue';
import logo from '/img/logo-sin-texto.svg'

const isOpen = ref(false);
const router = useRouter();
const scroll = ref(0);
const isLogin = ref(false);

const hancliClickMenu = () => {
    isOpen.value = !isOpen.value
};

onMounted(() => {
    logged();
});

function logged() {
    const token = localStorage.getItem('token');
    if (token) {
        isLogin.value = true;
    } else {
        isLogin.value = false;
    }
}

const handleScrollAnimation = () => {
    if (router.currentRoute.value.name === 'reservation') {
        scroll.value = 0;
    } else {
        scroll.value = window.scrollY;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScrollAnimation);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScrollAnimation);
});
</script>

<template>
    <header class="w-full flex items-center bg-white px-4 md:px-6 xl:px-10" @scroll="handleScrollAnimation"
        :class="scroll > 200 ? 'fixed shadow-lg transition duration-200 ease-in-out z-50' : 'relative transition-all duration-500 ease-in-out'">

        <!-- Logo a la izquierda -->
        <div class="flex items-center justify-center md:justify-start w-full md:w-auto flex-shrink-0"
            @click="hancliClickMenu">
            <img :src="logo" class="w-20 h-20 md:w-24 md:h-24" alt="Zona9.com Logo">
            <span class="font-bold text-xl md:text-2xl hidden md:block">Zona9</span>
        </div>

        <!-- Navegación centrada en pantallas medianas y grandes -->
        <nav class="hidden md:block absolute left-1/2 transform -translate-x-1/2 space-x-3 md:space-x-5">
            <Link to="home">Inicio</Link>
            <Link to="about-us">Acerca de</Link>
            <Link to="services">Servicios</Link>
            <Link to="about-us">Contacto</Link>
        </nav>

        <!-- Botones a la derecha en pantallas medianas y grandes -->
        <div class="hidden md:flex ml-auto space-x-3 md:space-x-5">
            <SecondButton type="secondary text-white" direction="reservation">Reservar</SecondButton>
            <SecondButton type="primary text-secondary" direction="dashboard" v-if="isLogin">Dashboard</SecondButton>
            <SecondButton type="primary text-secondary" direction="login" v-else>Iniciar</SecondButton>
        </div>

        <!-- Navegación para móviles -->
        <nav class="md:hidden absolute flex flex-col top-0 left-0 transform -translate-x-1/2 text-lg text-secondary z-50 text-center"
            :class="isOpen ? 'bg-white shadow-lg p-4 block w-full mt-[79px] slide-in-top' : 'hidden'">
            <RouterLink :to="{ name: 'home' }">Inicio</RouterLink>
            <RouterLink :to="{ name: 'about-us' }">Acerca de</RouterLink>
            <RouterLink :to="{ name: 'services' }">Servicios</RouterLink>

            <!-- Botones para móviles -->
            <div class="mt-4 flex flex-col space-y-5">
                <SecondButton type="bg-secondary text-white">Reservar</SecondButton>
                <SecondButton type="primary text-secondary">Iniciar</SecondButton>
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