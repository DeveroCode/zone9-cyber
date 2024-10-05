import { defineStore } from "pinia";
import { ref } from "vue";
import { formatCurrency } from "@/helpers";

export const usePcServices = defineStore("PcServices", () => {
    const MAX_PRICE = 17;
    const total_pay = ref(0);


    const calculateTotalHours = (start, end) => {
        const time_reserved = parseInt(end) - parseInt(start);
        total_pay.value = formatCurrency(time_reserved * MAX_PRICE);
    }


    return {
        total_pay,
        calculateTotalHours,
    }
});