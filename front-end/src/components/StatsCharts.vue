<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { usePcServices } from '@/stores/PcServices';

const services = usePcServices();

onMounted(async () => {
    await services.getStats();
    const data = services.stats;

    // Etiquetas de los ejes X: tipos de ganancias
    const labels = ['Ganancias Mensuales', 'Ganancias Diarias', 'Rentas Mensuales', 'Ganancias Netas'];

    // Dataset para el gráfico de barras
    const datasets = [{
        label: 'Tipos de Ganancias',
        data: data.map(item => item.cuantity.value),
        backgroundColor: data.map(() => getRandomColor(0.2)),
        borderColor: data.map(() => getRandomColor(1)),
        borderWidth: 1,
        tension: 0.4,
        fill: true
    }];

    // Configuración del gráfico
    new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
            labels,
            datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Ocultar leyenda
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // Desactivar las líneas de la cuadrícula en el eje X
                    },
                    ticks: {
                        color: '#808080' // Color blanco para las etiquetas del eje X en modo oscuro
                    }
                },
                y: {
                    grid: {
                        display: false // Mostrar líneas de la cuadrícula en el eje Y
                    },
                    ticks: {
                        color: '#808080' // Color blanco para las etiquetas del eje Y en modo oscuro
                    }
                }
            }
        }
    });
});

// Función para generar colores aleatorios
function getRandomColor(opacity = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
</script>

<template>
    <div class="w-full bg-white dark:bg-gray-900 dark:shadow-xl rounded-md p-6 shadow-md">
        <h1 class="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Rendimientos</h1>
        <canvas id="myChart"
            class="w-full h-full mx-auto sm:w-2/3 md:w-1/2 lg:w-3/5 xl:w-2/3 2xl:w-full max-w-full max-h-96 dark:text-white text-black"></canvas>
    </div>
</template>
