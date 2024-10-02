<script setup>
import Services from '@/components/Services.vue';
import Location from '@/components/Location.vue';
import Background from '/img/services.jpg'
import ServiceImg from '/img/services.svg'
import { CheckIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline';
const servicios = [
    "Servicio de Internet",
    "Renta de Computadoras",
    "Copias",
    "Impresiones a Color y Blanco y Negro",
    "Engargolado",
    "Venta de Accesorios y Equipo de Cómputo",
    "Reparación de Computadoras",
    "Venta de Equipo Electrónico"
];
</script>

<template>
    <section class="h-96 relative w-full flex flex-col items-center justify-center">
        <img :src="Background" alt="Imagen representativa mostrando las manos de una mujer trabajando en su computadora"
            class="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
        <div class="absolute inset-0 w-full h-full bg-secondary opacity-85"></div>
        <div class="relative z-10 text-center">
            <!-- Título principal -->
            <h1 class="text-white text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 animate-fadeInUp">
                Nuestros Servicios
            </h1>

            <!-- Subtítulo -->
            <p class="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl md:mb-8 animate-fadeInUp">
                Nos adaptamos a tus necesidades, ofreciéndote lo mejor en <span class="font-bold">Zona9</span>
            </p>

            <!-- Botón CTA -->
            <button
                class="text-secondary py-2 px-6 md:px-8 xl:px-10 2xl:px-12 rounded-full bg-primary mt-6 md:mt-8 xl:mt-10 font-bold text-base md:text-lg xl:text-xl 2xl:text-2xl hover:bg-white hover:text-secondary transition-all duration-300">
                Reserva
            </button>
        </div>
    </section>

    <main
        class="px-6 md:px-16 xl:px-24 2xl:px-32 h-auto md:h-screen flex flex-col-reverse md:flex-row justify-center items-center mb-32">
        <!-- Contenido de texto -->
        <div class="md:w-1/2">
            <div class="space-y-6 w-full py-10">
                <h2
                    class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl md:mt-16 xl:mt-24 2xl:mt-32 w-full font-bold capitalize text-secondary animate-fadeInUp">
                    Selecciona tu servicio preferido
                </h2>

                <p class="text-base md:text-lg xl:text-xl 2xl:text-2xl text-secondary">
                    Ofrecemos experiencias que conectan a las personas y potencian su productividad, brindando
                    soluciones que impulsan tu crecimiento en un entorno digital.
                </p>

                <ul class="space-y-3">
                    <li class="flex items-center gap-3 text-base md:text-lg xl:text-xl 2xl:text-2xl mb-3"
                        v-for="servicio in servicios">
                        <CheckIcon class="w-6 h-6 text-secondary" />
                        {{ servicio }}
                    </li>
                </ul>
            </div>

            <!-- Botón -->
            <RouterLink :to="{ name: 'home' }"
                class="text-secondary font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl inline-flex items-center gap-4 border-b-2 mt-2 py-3 border-primary transition-all duration-300 group hover:text-primary">
                Iniciar ahora!
                <ArrowLongRightIcon
                    class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary mt-1 transition-all duration-300 group-hover:text-primary" />
            </RouterLink>
        </div>
        <!-- Imagen -->
        <img :src="ServiceImg" alt="Personaje verificando el tiempo de su servicio desde un teléfono"
            class="w-full md:w-1/2 flex-1" loading="lazy">
    </main>


    <section
        class="p-6 md:p-16 xl:p-24 2xl:p-32 flex flex-col md:flex-row gap-8 md:gap-16 xl:gap-24 2xl:gap-32 md:items-center h-auto md:h-screen relative">
        <Location />

        <div class="px-4 md:px-0 z-10">
            <h5 class="text-base md:text-lg xl:text-xl 2xl:text-2xl text-secondary text-center md:text-start">
                Nuestra
                Ubicación</h5>
            <span
                class="text-secondary block mt-2 font-bold text-lg md:text-3xl xl:text-4xl 2xl:text-5xl text-center md:text-start">
                Conéctate cerca y a distancia
            </span>

            <div class="text-center md:text-start mt-8 xl:mt-10 2xl:mt-12">
                <span class="block text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-3 text-secondary">Sede
                    central</span>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Zona9.com</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Ascensión, Chihuahua</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">C.2 Naciones 207</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Col. Centro, 31820</p>
                <p class="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl">Chihuahua</p>
            </div>
        </div>
    </section>
</template>
