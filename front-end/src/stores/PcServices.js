import APIReservations from "@/services/APIReservations";
import { defineStore } from "pinia";
import { ref, onMounted, computed, inject } from "vue";
import { convertToMilitaryTime, convertToTime, formatCurrency } from "@/helpers";

export const usePcServices = defineStore("PcServices", () => {
    // Utilities
    const MAX_PRICE = 17;
    const toast = inject("toast");

    // Variable to create, edit a reservations
    const hour = ref(0);
    const reservations = ref([]);
    const rent = ref([]);
    const stats = ref({});

    // Variable to edit a reservation
    const oldReservation = ref({});
    const differencePay = ref(0);
    const original = ref({});
    const loan = ref(false);

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
            await APIReservations.update(id, format);
        } catch (error) {
            return { succes: false, messae: response.data.messae }
        }
    }

    onMounted(async () => {
        const { data } = await APIReservations.getReservations();
        console.log(data.data);
        reservations.value = data.data;
    })

    // Delete reservations
    const deleteReservation = async (id) => {
        try {
            const response = await APIReservations.delete(id);
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }


    // Confrim reservation
    async function ConfirmReservation(id) {
        try {
            const formatData = { 'loan': 1 };
            const response = await APIReservations.confirmR(id, formatData);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    async function NotConfirmReservation(id) {
        try {
            const formatData = { 'loan': 0 };
            const response = await APIReservations.confirmR(id, formatData);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return {
        onCreateReservation,
        totalHours,
        totalAmount,
        rent,
        hour,
        reservation, // => Crear la reservacion
        getStats,
        stats,
        updateData,
        updateReservation,
        oldReservation,
        original,
        reservations,
        differencePay,
        deleteReservation,
        ConfirmReservation,
        NotConfirmReservation
    }
});