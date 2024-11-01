import APIReservations from "@/services/APIReservations";
import { defineStore } from "pinia";
import { ref, onMounted, computed, reactive } from "vue";
import { convertToMilitaryTime, convertToTime, formatCurrency } from "@/helpers";

export const usePcServices = defineStore("PcServices", () => {
    // Utilities
    const MAX_PRICE = 17;
    const visible = ref(false);

    // Variable to create, edit a reservations
    const hour = ref(0);
    const reservations = ref([]);
    const rent = ref([]);
    const stats = ref({});
    const updateTotal = ref(0);

    // Variable to edit a reservation
    const oldReservation = ref({});
    const differencePay = ref(0);
    const original = ref({});


    // Functions to create a new Reservation
    function onCreateReservation(reservation, id = null) {
        if (!id) {
            rent.value.push({ ...reservation });
        } else {
            oldReservation.value = reservation;
            original.value = reservations.value.find(r => r.id === id);;
            updateReservation();
        }

    }

    const totalHours = computed(() => {
        const hours = rent.value.reduce((total, service) => {
            const startTime = convertToMilitaryTime(service.start);
            const endTime = convertToMilitaryTime(service.end);

            console.log(`Hora inicio: ${service.start}, Hora fin: ${service.end}`);

            return total + (endTime - startTime);
        }, 0);
        hour.value = hours;
        return convertToTime(hours)
    });

    const totalAmount = computed(() => {
        const minutes = Math.floor(hour.value / 100) * 60 + (hour.value % 100);
        return (minutes / 60) * MAX_PRICE;
    });

    async function reservation(data) {
        try {
            const response = APIReservations.create(data);
            return { succes: true, message: response.data.message };
        } catch (error) {
            console.log(error);
        }
    }


    async function getStats() {
        try {
            const { data } = await APIReservations.getStats();
            stats.value = data.data;
            console.log('desde pc service', stats.value);
        } catch (error) {
            console.log(error);
        }
    }


    //  functions to edit a reservation
    function updateData() {
        if (oldReservation.value.end !== original.value.end) {
            rent.value.push(oldReservation.value);
            oldReservation.value.total_hours = totalHours.value;
            oldReservation.value.total_amount = totalAmount.value;
            differencePay.value = formatCurrency(oldReservation.value.total_amount - original.value.total_amount);
        }
    }

    async function updateReservation(id, format) {
        try {
            const response = await APIReservations.update(id, format);
            return { success: true, message: response.data.message };
        } catch (error) {
            console.log(error.message);
        }
    }

    onMounted(async () => {
        const { data } = await APIReservations.getReservations();
        reservations.value = data.data;
    })

    return {
        onCreateReservation,
        totalHours,
        totalAmount,
        rent,
        hour,
        reservation, // => Crear la reservacion
        getStats,
        updateData,
        updateReservation,
        oldReservation,
        original,
        visible,
        reservations,
        stats,
        getStats,
        differencePay
    }
});