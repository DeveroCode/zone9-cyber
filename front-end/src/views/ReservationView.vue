<script setup>
import ReservationForm from '@/components/Forms/ReservationForm.vue';
import Reservation from '/img/reservation.svg';
</script>

<template>
    <section class="px-32 py-16">
        <h1 class="text-4xl font-bold text-center text-secondary capitalize">Ingresa tus datos y reserva tu computadora
        </h1>
        <span class="text-md block my-3 text-secondary text-center">Evita perder tiempo haciendo fila. Escoge el horario
            que mejor se acomode a tus necesidades y visítanos a la hora acordada.</span>
    </section>
    <div class="px-32 pb-32 flex flex-row justify-center gap-32">
        <div class="w-1/2">
            <img :src="Reservation" alt="Imagen representativa de varias personas conectadas al internet"
                class="w-[500px] mx-auto object-cover animate-float mt-10" loading="lazy">
        </div>
        <main class="mt-10">
            <ReservationForm />
        </main>
    </div>
</template>

<style>
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