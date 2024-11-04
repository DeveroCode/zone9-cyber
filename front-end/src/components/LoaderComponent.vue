<script setup>
</script>

<template>
    <div class="w-max-7xl bg-secondary-dark flex justify-center items-center loader-overlay">
        <div class="flex flex-col justify-center items-center space-y-4">
            <span class="loader"></span>
            <p class="text-white font-bold text-2xl">Descargando actualizaciones...</p>
        </div>
    </div>
</template>

<style scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
}

@keyframes animloader {
    0% {
        box-shadow: -72px 0 #FFF inset;
    }

    100% {
        box-shadow: 48px 0 #FFF inset;
    }
}
</style>