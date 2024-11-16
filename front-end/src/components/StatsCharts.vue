<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { usePcServices } from '@/stores/PcServices';

const services = usePcServices();

onMounted(async () => {
    await services.getStats();
    const data = services.stats;

    // Actualiza las etiquetas según tus títulos personalizados
    const labels = ['Ganancias Mensuales', 'Ganancias Diarias', 'Rentas Mensuales', 'Ganancias Netas'];

    const datasets = data.map((item, index) => ({
        label: item.title,
        data: [item.cuantity.value],
        borderColor: getRandomColor(),
        backgroundColor: getRandomColor(0.2),
        tension: 0.4,
        fill: false,
        pointBackgroundColor: getRandomColor(),
        pointBorderColor: '#fff'
    }));

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
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280'
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
});

function getRandomColor(opacity = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
</script>

<template>
    <div class="w-full bg-white dark:bg-secondary dark:shadow-xl rounded-md p-6 shadow-md">
        <h1 class="text-2xl font-semibold text-gray-700 mb-4">Rendimientos</h1>
        <canvas id="myChart" class="w-full h-full mx-auto"></canvas>
    </div>
</template>
