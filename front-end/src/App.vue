<script setup>
import { RouterView } from 'vue-router';
import LoaderComponent from '@/components/LoaderComponent.vue'
import { usePcServices } from '@/stores/PcServices';

const services = usePcServices();
</script>

<template>
  <LoaderComponent v-if="services.isLoading" class="h-screen" />
  <RouterView />
</template>