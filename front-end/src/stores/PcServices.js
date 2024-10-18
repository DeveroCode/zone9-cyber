import APIReservations from "@/services/APIReservations";
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const usePcServices = defineStore("PcServices", () => {
    const MAX_PRICE = 17;
    const total_pay = ref(0);
    const total_hours = ref(0);
    const reservations = ref([]);
    const stats = ref({});

    const calculateTotalHours = (start, end) => {
        total_hours.value = parseInt(end) - parseInt(start);
        total_pay.value = total_hours.value * MAX_PRICE;
    }

    async function reservation(data) {
        try {
            const response = APIReservations.create(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    onMounted(async () => {
        const { data } = await APIReservations.getReservations();
        reservations.value = data;
    })

    async function getStats() {
        try {
            const { data } = await APIReservations.getStats();
            stats.value = data.data;
            console.log('desde pc service', stats.value);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        total_pay,
        total_hours,
        calculateTotalHours,
        reservation,
        reservations,
        stats,
        getStats
    }
});