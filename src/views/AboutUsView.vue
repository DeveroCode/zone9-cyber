<script setup>
import { onMounted, ref } from 'vue';
import Zone from '/img/zone.svg'
import Profile from '/img/profile-example.png'
import Waves from '@/components/parallax/Waves.vue'
import Parallax from 'parallax-js'

const peopleParallax = ref(null)

onMounted(() => {
    const scene = document.querySelector('.people')
    if (scene) {
        new Parallax(scene)
    }
});
</script>

<template>
    <main
        class="relative min-h-screen overflow-hidden flex flex-col md:flex-row justify-between px-4 md:px-32 items-center">
        <!-- Título central -->
        <div class="text-center w-full md:w-1/2  mb-8 md:mb-32 2xl:mb-64">
            <h1 class="text-3xl md:text-5xl 2xl:text-8xl font-bold text-secondary mt-10">Zona09.com</h1>
            <span class="text-sm text-gray-600 2xl:text-2xl">Nos adaptamos a tus necesidades</span>

            <p class="text-base md:text-lg 2xl:text-xl text-gray-500 mt-5">
                Somos una tienda que nos caracterizamos por nuestra amabilidad con nuestros clientes. Desde 2018 hemos
                atendido a la comunidad de Asunción, Chihuahua, además de innovarnos y posicionarnos dentro de la Web,
                haciendo así un avance más interactivo para nuestros clientes y para todo público.
            </p>
        </div>

        <div class="people">
            <img :src="Zone" loading="lazy"
                class="h-[390px] mb-8 md:mb-32 lg:mb-10 xl:-mb-10 2xl:mb-16 2xl:mr-32 md:mr-0"
                alt="Persona caminando sobre olas de arena, cargando una laptop y lista para iniciar su jornada laboral"
                ref="peopleParallax" data-depth="0.3">
        </div>
        <Waves class="md:block hidden" />
    </main>


    <section class="min-h-screen flex flex-col items-center justify-center main-section">
        <h2 class="text-2xl md:text-4xl font-semibold text-secondary">Conoce a nuestro equipo</h2>


        <div class="mt-10 flex gap-24">
            <div>
                <img :src="Profile" class="w-32 h-32 mt-4 mx-auto" alt="imagen representativa de perfil de una persona">
                <p class="text-secondary text-2xl font-bold">Guadalupe Hernández</p>
                <span class="text-center text-gray-500 block">@Empleada</span>
            </div>

            <div>
                <img :src="Profile" class="w-32 h-32 mt-4 mx-auto" alt="imagen representativa de perfil de una persona">
                <p class="text-secondary text-2xl font-bold">Sergio Eduaro Apodaca</p>
                <span class="text-center text-gray-500 block">@Administradora</span>
            </div>
        </div>

        <h3 class="text-3xl md:text-5xl font-semibold text-secondary text-center py-16">Ofreciendo soluciones desde 2018
        </h3>
    </section>
</template>