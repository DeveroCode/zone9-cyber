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
            <h1 class="text-white text-2xl md:text-5xl font-bold mb-4 animate-fadeInUp">Nuestros Servicios</h1>

            <!-- Subtítulo -->
            <p class="text-white md:mb-8 text-xl animate-fadeInUp">
                Nos adapatamos a tus necesidades, ofreciendote lo mejor en <span class="font-bold">Zona9</span>
            </p>

            <!-- Botón CTA -->
            <button
                class="text-secondary py-2 px-6 md:px-10 rounded-full bg-primary mt-6 md:mt-5 font-bold text-base md:text-lg hover:bg-white hover:text-secondary transition-all duration-300">
                Reserva
            </button>
        </div>
    </section>

    <main class="px-6 md:px-24 h-auto md:h-screen flex flex-col-reverse md:flex-row justify-center items-center mb-32">
        <!-- Contenido de texto -->
        <div class="md:w-1/2">
            <div class="space-y-6 w-full py-10">
                <h2
                    class="text-2xl 2xl:text-7xl md:text-5xl md:mt-32 w-full font-bold capitalize text-secondary animate-fadeInUp">
                    Selecciona tu servicio preferido
                </h2>

                <p class="text-lg text-secondary">
                    Ofrecemos experiencias que conectan a las personas y potencian su productividad, brindando
                    soluciones que impulsan tu crecimiento en un entorno digital.
                </p>

                <ul class="last-of-type:mb-32">
                    <li class="flex items-center gap-3 text-xl mb-3" v-for="servicio in servicios">
                        <CheckIcon class="w-6 h-6 text-secondary" />
                        {{ servicio }}
                    </li>
                </ul>
            </div>

            <!-- Botón -->
            <RouterLink :to="{ name: 'home' }"
                class="text-secondary text-2xl flex items-center gap-3 font-semibold mx-auto md:mx-0 w-[45%] md:w-[28%] border-b-[2px] mt-16 py-2 border-primary transition-all duration-300 group hover:text-primary">
                Iniciar ahora!
                <ArrowLongRightIcon
                    class="w-5 h-5 text-secondary mt-1 transition-all duration-300 group-hover:text-primary" />
            </RouterLink>
        </div>

        <!-- Imagen -->
        <img :src="ServiceImg" alt="Personaje verificando el tiempo de su servicio desde un teléfono"
            class="w-full md:w-1/2 flex-1" loading="lazy">
    </main>

    <section
        class="p-6 md:p-24 flex flex-col md:flex-row gap-16 md:gap-32 md:items-center h-auto md:h-screen relative main-section">
        <Location />

        <div class="px-4 md:px-0 z-10">
            <h5 class="text-xl text-secondary text-center md:text-start">Nuestra Ubicación</h5>
            <span class="text-secondary block mt-2 font-bold text-center md:text-start text-2xl md:text-5xl">Conectate
                cercas y a distancia</span>

            <div class="text-center md:text-start">
                <span class="block mt-10 text-xl font-bold mb-3 text-secondary">Sede central</span>
                <p class="text-secondary">Zona9.com</p>
                <p class="text-secondary">Ascención, Chihuahua</p>
                <p class="text-secondary">C.2 Naciones 207</p>
                <p class="text-secondary">Col. Centro, 31820</p>
                <p class="text-secondary">Chihuahua</p>
            </div>
        </div>
    </section>
</template>


<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-in-out forwards;
}

.main-section {
    position: relative;
    z-index: 1;
}

.main-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 50%, rgba(255, 215, 64, 0.7) 50%);
    z-index: -1;
    opacity: 0.3;
    transform: rotate(0deg);
}
</style>