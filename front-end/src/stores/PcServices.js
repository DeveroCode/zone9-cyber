import APIReservations from "@/services/APIReservations";
import { defineStore } from "pinia";
import { ref, onMounted, computed, inject, reactive } from "vue";
import { convertToMilitaryTime, convertToTime, formatCurrency } from "@/helpers";

export const usePcServices = defineStore("PcServices", () => {
    // Utilities
    const MAX_PRICE = 17;
    const toast = inject("toast");
    const computers = ref([]);
    const selectPc = ref('');

    // Variable to create, edit a reservations
    const hour = ref(0);
    const reservations = ref([]);
    const rent = ref([]);
    const stats = ref({});

    // Variable to edit a reservation
    const oldReservation = ref({});
    const differencePay = ref(0);
    const original = ref({});
    const isLoading = ref(false);

    const pagination = reactive({
        current_page: 1,
        last_page: 1,
        per_page: null,
        total: null
    });

    async function aviableComputers($start, $end) {
        try {
            const { data } = await APIReservations.getComputersAvailable($start, $end);
            computers.value = data.data
        } catch (error) {
            console.log(error);
        }
    }

    function selectedPc(id) {
        const selectedComputer = computers.value.find(computer => computer.id === id);
        if (selectedComputer) {
            selectPc.value = selectedComputer;
        }
    }

    // Functions to create a new Reservation
    function onCreateReservation(reservation, id = null) {
        if (!id) {
            oldReservation.value = reservation;
        } else {
            oldReservation.value = reservation;
            original.value = reservations.value.find(r => r.id === id);
        }

    }

    const totalHours = computed(() => {
        const startTime = convertToMilitaryTime(oldReservation.value.start);
        const endTime = convertToMilitaryTime(oldReservation.value.end);
        const total = endTime - startTime;

        hour.value = total;
        return convertToTime(total);
    });

    const totalAmount = computed(() => {
        const minutes = Math.floor(hour.value / 100) * 60 + (hour.value % 100);
        return (minutes / 60) * MAX_PRICE;
    });

    async function reservation(data) {
        try {
            const response = APIReservations.create(data);
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: 'Reservacion fallida' };
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

    function updateData() {
        if (oldReservation.value.end !== original.value.end) {
            // Actualiza la reserva
            rent.value.push(oldReservation.value);
            oldReservation.value.total_hours = totalHours.value;
            oldReservation.value.total_amount = totalAmount.value;
            differencePay.value = formatCurrency(oldReservation.value.total_amount - original.value.total_amount);
        }
    }

    async function updateReservation(id, format) {
        try {
            await APIReservations.update(id, format);
            await getReservationsFn();
            return { success: true, message: 'Reservacion actualizada con exito' };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    async function getReservationsFn(pageUrl = null) {
        try {
            const { data } = await APIReservations.getReservations(pageUrl);
            reservations.value = data.data;
            Object.assign(pagination, data.pagination);
        } catch (error) {
            console.log(error);
        }
    }

    async function changePage(url) {
        if (url) {
            await getReservationsFn(url);
        }
    }

    // Delete reservations
    const deleteReservation = async (id) => {
        try {
            const response = await APIReservations.delete(id);
            await getReservationsFn();
            return { success: true, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    // Confrim reservation
    async function ConfirmReservation(id) {
        const formatData = { 'loan': 1 };
        try {
            isLoading.value = true;
            await APIReservations.confirmR(id, formatData);
            await getReservationsFn();
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            isLoading.value = false
        }
    }

    const confirmedReservations = computed(() => {
        return reservations.value.filter(reservation => reservation.loan === 1);
    });

    const totalAmountConfirmed = computed(() => {
        return confirmedReservations.value.reduce((total, reservation) => total + reservation.total_hours, 0);
    });

    const totalAmountConfirmedCount = computed(() => { return confirmedReservations.value.reduce((total, service) => total + service.total_amount, 0) });

    const totalConfirmed = computed(() => {
        return confirmedReservations.value.length
    });

    const NotConfirmed = computed(() => { return reservations.value.filter(reservation => reservation.loan === 0) });
    const totalNotConfirmed = computed(() => { return NotConfirmed.value.reduce((total, reservation) => total + reservation.total_amount, 0) });
    const totalNotConfirmedCount = computed(() => { return NotConfirmed.value.length });

    const ExpensesHours = computed(() => {
        return NotConfirmed.value.reduce((total, reservation) => total + reservation.total_hours, 0);
    });

    async function NotConfirmReservation(id) {
        const formatData = { 'loan': 0 };
        try {
            isLoading.value = true;
            await APIReservations.confirmR(id, formatData);
            await getReservationsFn();
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            isLoading.value = false;
        }
    }

    async function searchReservation(word) {
        try {
            const { data } = await APIReservations.search(word);
            reservations.value = data.data;
            return { success: true, message: 'Reservacion encontrada con exito' };
        } catch (error) {
            return { success: false, message: error.response.data.message };
        }
    }

    return {
        aviableComputers,
        computers,
        selectPc,
        selectedPc,
        onCreateReservation,
        changePage,
        pagination,
        totalHours,
        totalAmount,
        rent,
        hour,
        getReservationsFn,
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
        confirmedReservations,
        totalAmountConfirmed,
        totalAmountConfirmedCount,
        totalConfirmed,
        totalNotConfirmed,
        NotConfirmReservation,
        NotConfirmed,
        totalNotConfirmedCount,
        ExpensesHours,
        isLoading,
        searchReservation
    }
});