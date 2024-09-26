<script setup>
import { ref, onMounted } from 'vue'
import background from '/img/background.jpg'
import working from '/img/working.svg'
import wifi from '/img/logo-wifi.svg'
import Services from '@/components/Services.vue'
import ContactUs from '@/components/Contact-us.vue'
import Location from '@/components/Location.vue'
import Parallax from 'parallax-js'
import { CheckIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';

const parallaxElement = ref(null)

onMounted(() => {
    const scene = document.querySelector('.parallax')
    if (scene) {
        new Parallax(scene)
    }
});
</script>

<template>
    <section class="bg-secondary py-10 h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-32 ">
        <div class="text-white text-center md:text-left">
            <h1 class="text-4xl md:text-7xl 2xl:text-8xl w-full md:w-2/3 font-bold animate-fadeInUp">
                Bienvenido a Zona9.com
            </h1>
            <p class="mt-4 text-lg md:text-lg md:w-2/3 animate-fadeInUp">
                Tu espacio de trabajo en el centro de la ciudad. Conéctate, trabaja y disfruta de un excelente servicio.
            </p>

            <button
                class="text-secondary py-2 px-6 md:px-10 rounded-full bg-primary mt-6 md:mt-10 font-bold text-base md:text-lg hover:bg-white hover:text-secondary transition-all duration-300">
                Reserva
            </button>
        </div>

        <div class="md:parallax md:w-[42%]">
            <img :src="wifi" ref="parallaxElement" data-depth="1.0"
                alt="Persona trabajando en su laptop, sentada sobre un router rodeada de iconos de mensajes, emails y aplicaciones de chat como WhatsApp"
                class="hidden md:block mt-8 md:mt-0" loading="lazy">
        </div>
    </section>


    <!-- 
    <section class="bg-secondary py-10 h-screen flex justify-center items-center px-32 relative">
        <img :src="background" alt="Background" class="absolute top-0 left-0 w-full h-full object-cover opacity-50">
        <div class="text-white relative z-10">
            <h1 class="2xl:text-8xl md:text-7xl md:w-2/3 font-bold">Bienvenido a Zona9.com</h1>
            <p class="mt-4 text-lg w-2/3">Tu espacio de trabajo en el centro de la ciudad. Conéctate, trabaja y disfruta
                de un excelente servicio.</p>
            <button
                class="text-secondary py-2 px-10 rounded-full bg-primary mt-10 font-bold text-lg hover:bg-white hover:text-secondary transition-all duration-300">Reserva</button>
        </div>
        <img :src="wifi" alt="WiFi Logo" class="w-[42%] relative z-10">
    </section> -->

    <main class="main-section p-6 mt-10 md:mt-0 md:p-24 h-auto md:h-screen flex flex-col justify-center relative">
        <h2
            class="text-2xl w-full 2xl:text-7xl md:text-5xl md:w-2/3 font-bold capitalize text-secondary animate-fadeInUp">
            creemos que cada experiencia debe ser eficiente y agradable.
        </h2>
        <div class="mt-10">
            <p class="text-lg 2xl:text-xl text-secondary md:w-1/2">
                Fundada en 2018, Zona9 ha brindado un servicio de alta calidad a la comunidad de Ascension, Chihuahua.
                Nuestro principal objetivo es proporcionar una experiencia satisfactoria y segura a todos nuestros
                clientes.
            </p>
            <section>
                <span class="text-lg mt-10 block 2xl:text-xl text-secondary md:w-1/2">
                    Sea cual sea el servicio de su elección, nos aseguraremos de que esté libre de riesgos y sea
                    entretenido en todo momento.
                </span>
                <Services />
            </section>
        </div>
    </main>


    <!-- <section class="bg-secondary h-screen p-24 mb-32 flex flex-col justify-center">
        <h2 class="2xl:text-8xl md:text-5xl w-2/3 font-bold capitalize text-white">Nos adaptamos a tus necesidades</h2>


        <div class="flex justify-between mt-10">
            <div class="text-gray-300 text-xl">
                <p class="w-2/3">Creemos que la mejor experiencia en un cibercafé es aquella que se adapta a las
                    necesidades de nuestros clientes. Por eso, en <span>Zona9</span> ofrecemos una amplia variedad de
                    servicios. Entre ellos, puedes disfrutar de acceso a computadoras, impresiones,
                    escaneos y otros servicios relacionados.</p>
                <br>
                <p class="w-2/3">Actualizamos continuamente nuestros servicios para que tu tiempo con nosotros sea lo
                    más productivo y
                    cómodo posible.</p>
            </div>


            <ul class="text-white w-full text-xl space-y-4">
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" />
                    Servicio de impresión por QR
                </li>
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" />
                    Reserva de computadoras
                </li>
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" />
                    Reparación y matenimientode equipo
                </li>
            </ul>
        </div>
    </section> -->

    <section
        class="bg-secondary min-h-screen p-10 md:p-24 mb-32 flex flex-col md:flex-row justify-between items-center mt-10 md:mt-0">
        <div class="flex-1">
            <h3
                class="text-2xl text-center md:text-start 2xl:text-8xl md:text-5xl mb-8 font-bold capitalize text-white">
                Nos adaptamos
                a tus
                necesidades
            </h3>
            <div class="text-gray-300 text-lg md:text-xl mb-6">
                <p class="md:w-2/3">Creemos que la mejor experiencia en un cibercafé es aquella que se adapta a las
                    necesidades de nuestros clientes. Por eso, en <span>Zona9</span> ofrecemos una amplia variedad de
                    servicios. Entre ellos, puedes disfrutar de acceso a computadoras, impresiones,
                    escaneos y otros servicios relacionados.</p>
                <br>
                <p class="md:w-2/3">Actualizamos continuamente nuestros servicios para que tu tiempo con nosotros sea
                    lo más productivo y cómodo posible.</p>
            </div>

            <ul class="text-white w-full text-xl space-y-4 py-10">
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" />
                    Servicio de impresión por QR
                </li>
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" />
                    Reserva de computadoras
                </li>
                <li class="flex items-center gap-3">
                    <CheckIcon class="w-6 h-6 text-primary" />
                    Reparación y mantenimiento de equipo
                </li>
            </ul>
        </div>

        <img :src="working"
            alt="personaje sentado sobre un reloj de arena mientras trabaja comodamente en una computadora en sus tiempos correctos"
            class="hidden md:block md:w-1/2 lg:w-[39%] mt-6 md:mt-0" loading="lazy">
    </section>


    <div class="p-6 h-auto md:h-screen md:p-24 flex flex-col md:flex-row items-center justify-between" id="#contact">
        <div class="md:w-2/3">
            <h4 class="font-bold text-secondary text-2xl md:text-7xl">Contactanos</h4>
            <p class="text-secondary md:text-2xl mt-12 md:mt-28 md:pr-32">Email, llamada o completa el formulario para
                leer como en <span class="font-bold">Zona9</span> podemos
                resolver tus dudas o sugerencias</p>

            <div class="mt-8 md:mt-16 text-secondary flex flex-col gap-4 md:text-xl">
                <a href="mailto:Zona9_@hotmail.com" class="flex gap-3 items-center">
                    <EnvelopeIcon class="w-6 h-6" /> Zona9_@hotmail.com
                </a>
                <span class="flex gap-3 items-center">
                    <PhoneIcon class="w-6 h-6" /> 636 690 5514
                </span>
            </div>


            <ul class="mt-10 flex flex-col md:flex-row gap-10">
                <li class="md:w-1/4 text-secondary">
                    <span class="font-bold block mb-2">Atención al cliente</span>

                    <p class="text-sm">
                        Nuestro equipo de atencion al cliente esta disponible de lunes a viernes en un horario de 9:00a.
                        m. - 3:30p. m.
                    </p>
                </li>
                <li class="md:w-1/4 text-secondary">
                    <span class="font-bold block mb-2">Comentarios y sugerencias</span>

                    <p class="text-sm">
                        Valoramos sus comentarios y trabajamos continuamente para mejorar <span
                            class="font-bold">Zona9</span>. Tu opinion es crucial para el futuro de <span
                            class="font-bold">Zona9</span>
                    </p>
                </li>
            </ul>
        </div>

        <ContactUs class="mt-10 md:mt-0md:w-1/3" />
    </div>

    <section
        class="location-section p-6 md:p-24 flex flex-col md:flex-row gap-16 md:gap-32 md:items-center h-auto md:h-screen relative">
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