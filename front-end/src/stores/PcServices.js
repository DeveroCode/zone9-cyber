import APIReservations from "@/services/APIReservations";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePcServices = defineStore("PcServices", () => {
    const MAX_PRICE = 17;
    const total_pay = ref(0);
    const total_hours = ref(0);


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

    return {
        total_pay,
        total_hours,
        calculateTotalHours,
        reservation
    }
});