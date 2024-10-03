<script setup>
import { ref, onMounted } from 'vue'
import Parallax from 'parallax-js'
import { CheckIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import Button from '@/components/Links and Buttons/Buttons.vue';
import Services from '@/components/Services.vue'
import ContactUs from '@/components/Contact-us.vue'
import Location from '@/components/Location.vue'
import Ubicacion from '@/components/Ubication.vue'
import background from '/img/background.jpg'
import working from '/img/working.svg'
import wifi from '/img/logo-wifi.svg'

const parallaxElement = ref(null)

onMounted(() => {
    const scene = document.querySelector('.parallax')
    if (scene) {
        new Parallax(scene)
    }
});
</script>

<template>
    <section class="bg-secondary py-10 h-screen flex flex-col md:flex-row justify-center items-center px-4 lg:px-16">
        <div class="text-white text-center md:text-left w-full md:w-1/2 lg:w-3/5">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeInUp">
                Bienvenido a Zona9.com
            </h1>
            <p class="mt-4 mb-10 text-base md:text-lg lg:text-xl animate-fadeInUp">
                Tu espacio de trabajo en el centro de la ciudad. Conéctate, trabaja y disfruta de un excelente servicio.
            </p>
            <Button>Reserva</Button>
        </div>

        <div class="parallax lg:w-[60%] xl:w-[55%] 2xl:w-[45%]">
            <img :src="wifi" ref="parallaxElement" data-depth="1.0"
                alt="Persona trabajando en su laptop, sentada sobre un router"
                class="hidden md:block mt-8 md:mt-0 w-full" loading="lazy">
        </div>
    </section>

    <main class="main-section p-6 md:p-16 lg:p-24 h-auto md:h-screen flex flex-col justify-center">
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold capitalize text-secondary animate-fadeInUp">
            creemos que cada experiencia debe ser eficiente y agradable.
        </h2>
        <div class="mt-10">
            <p class="text-lg md:text-xl lg:text-2xl text-secondary">
                Fundada en 2018, Zona9 ha brindado un servicio de alta calidad a la comunidad de Ascension, Chihuahua.
            </p>
            <section>
                <span class="text-lg block mt-4 text-secondary lg:text-2xl">
                    Nos aseguramos de que cada servicio esté libre de riesgos y sea entretenido en todo momento.
                </span>
                <Services />
            </section>
        </div>
    </main>

    <section
        class="bg-secondary min-h-screen p-6 md:p-16 lg:p-24 flex flex-col md:flex-row justify-between items-center">
        <div class="flex-1">
            <h3 class="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                Nos adaptamos a tus necesidades
            </h3>
            <div class="text-gray-300 text-lg md:text-xl mt-6">
                <p class="md:w-2/3">Creemos que la mejor experiencia en un cibercafé es aquella que se adapta a las
                    necesidades de nuestros clientes.</p>
                <br>
                <p class="md:w-2/3">Actualizamos continuamente nuestros servicios para que tu tiempo con nosotros sea lo
                    más productivo posible.</p>
            </div>

            <ul class="text-white text-lg md:text-xl space-y-4 mt-10">
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" /> Servicio de impresión por QR
                </li>
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" /> Reserva de computadoras
                </li>
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" /> Reparación y mantenimiento de equipo
                </li>
            </ul>
        </div>

        <img :src="working" alt="Persona trabajando en una computadora" class="hidden md:block md:w-1/2 lg:w-[45%] mt-6"
            loading="lazy">
    </section>

    <!-- Sección de contacto -->
    <div class="mx-auto p-6 md:p-16 lg:p-24 flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-2/3">
            <h4 class="font-bold text-2xl md:text-4xl lg:text-5xl text-secondary">Contáctanos</h4>
            <p class="text-secondary md:text-xl mt-4 lg:mt-8 md:pr-8 lg:pr-0">Email, llamada o completa el formulario
                para ver
                cómo en
                Zona9 podemos ayudarte.</p>
            <div class="mt-8 md:mt-12 flex flex-col gap-4">
                <a href="mailto:Zona9_@hotmail.com" class="flex gap-3 items-center text-secondary">
                    <EnvelopeIcon class="w-6 h-6" /> Zona9_@hotmail.com
                </a>
                <span class="flex gap-3 items-center text-secondary">
                    <PhoneIcon class="w-6 h-6" /> 636 690 5514
                </span>
            </div>

            <ul class="mt-10 flex flex-col md:flex-row gap-10">
                <li class="md:w-1/4 xl:w-1/3 text-secondary">
                    <span class="font-bold block mb-2">Atención al cliente</span>

                    <p class="text-sm">
                        Nuestro equipo de atencion al cliente esta disponible de lunes a viernes en un horario de 9:00a.
                        m. - 3:30p. m.
                    </p>
                </li>
                <li class="md:w-1/4 xl:w-1/3 text-secondary">
                    <span class="font-bold block mb-2">Comentarios y sugerencias</span>

                    <p class="text-sm">
                        Valoramos sus comentarios y trabajamos continuamente para mejorar <span
                            class="font-bold">Zona9</span>. Tu opinion es crucial para el futuro de <span
                            class="font-bold">Zona9</span>
                    </p>
                </li>
            </ul>
        </div>
        <ContactUs class="mt-8 md:mt-0" />
    </div>

    <!-- Ubicación -->
    <Ubicacion />
</template>


<style>
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