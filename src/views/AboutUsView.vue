<script setup>
import { onMounted, ref } from 'vue';
import Waves from '@/components/parallax/Waves.vue'
import Parallax from 'parallax-js'
import Zone from '/img/zone.svg'

const peopleParallax = ref(null)

onMounted(() => {
    const scene = document.querySelector('.people')
    if (scene) {
        new Parallax(scene)
    }
})
</script>

<template>
    <main
        class="relative min-h-screen overflow-hidden flex flex-col md:flex-row justify-between px-4 md:px-32 items-center">
        <!-- Título central -->
        <div class="text-center w-full md:w-1/3 mb-8 md:mb-32 2xl:mb-64">
            <h1 class="text-3xl md:text-5xl 2xl:text-8xl font-bold text-secondary mt-10">Zona09.com</h1>
            <span class="text-sm text-gray-600 2xl:text-2xl">Nos adaptamos a tus necesidades</span>

            <p class="text-base md:text-lg 2xl:text-xl text-gray-500 mt-5">
                Somos una tienda que nos caracterizamos por nuestra amabilidad con nuestros clientes. Desde 2018 hemos
                atendido a la comunidad de Asunción, Chihuahua, además de innovarnos y posicionarnos dentro de la Web,
                haciendo así un avance más interactivo para nuestros clientes y para todo público.
            </p>
        </div>

        <div class="people">
            <img :src="Zone" class="h-[390px] mb-8 md:mb-32 2xl:mb-20 2xl:mr-32 md:mr-0"
                alt="Persona caminando sobre olas de arena, cargando una laptop y lista para iniciar su jornada laboral"
                ref="peopleParallax" data-depth="0.3">
        </div>

        <!-- Olas SVG -->
        <Waves class="md:block hidden" />
    </main>
</template>