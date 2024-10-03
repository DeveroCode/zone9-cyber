<script setup>
import { onMounted, ref } from 'vue';
import Parallax from 'parallax-js'

const parallaxElement = ref(null)

onMounted(() => {
    const scene = document.querySelector('.parallax')
    if (scene) {
        new Parallax(scene)
    }
});
</script>

<template>
    <div class="inset-0 parallax absolute md:mt-[420px] 2xl:mt-[530px]">
        <!-- Primera Ola -->
        <svg class="absolute bottom-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
            ref="parallaxElement" data-depth="0.05">
            <path fill="#facc15" fill-opacity="0.3"
                d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,165.3C672,160,768,128,864,106.7C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>

        <!-- Segunda Ola con opacidad 0.7 -->
        <svg class="absolute bottom-0 w-full h-auto opacity-70" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320" ref="parallaxElement" data-depth="0.05">
            <path fill="#facc15" fill-opacity="1"
                d="M1440,0L1392,32C1344,64,1248,128,1152,160C1056,192,960,192,864,160C768,128,672,64,576,64C480,64,384,128,288,160C192,192,96,192,48,192L0,192L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320Z">
            </path>
        </svg>
    </div>
</template>