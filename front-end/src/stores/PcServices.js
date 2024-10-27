import APIReservations from "@/services/APIReservations";
import { defineStore } from "pinia";
import { ref, onMounted, computed, reactive } from "vue";
import { convertToMilitaryTime, convertToTime, toggleModal } from "@/helpers";

export const usePcServices = defineStore("PcServices", () => {
    // Utilities
    const MAX_PRICE = 17;
    const visible = ref(false);

    // Variable to create a reservations
    const hour = ref(0);
    const reservations = ref([]);
    const rent = ref([]);
    const stats = ref({});


    // Functions to create a new Reservation
    function onCreateReservation(reservation) {
        rent.value.push({ ...reservation });
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
        console.log(`Minutos totales: ${minutes}`);
        return (minutes / 60) * MAX_PRICE;
    });
    // variable to edit reservation
    const newPay = ref(0);
    const serviceData = reactive({
        id: '',
        end: '',
        start: '',
        old_amount: '',
        newPay: '',
        differencePay: '',
        total_amount: '',
        new_time: '',
    });

    function handleSelectServiceToEdit(service) {
        toggleModal(visible);
        Object.assign(serviceData, {
            id: service.id,
            end: service.end,
            start: service.start,
            old_amount: service.total_mount,
            newPay: '',
            differencePay: '',
            total_amount: '',
            new_time: service.end,
        });

        console.log(serviceData, visible.value);
    }

    const calculateChanges = (start, end) => {
        newPay.value = calculateTotalHours(start, end);
        console.log(newPay.value);
    }

    async function reservation(data) {
        try {
            const response = APIReservations.create(data);
        } catch (error) {
        }
    }

    onMounted(async () => {
        const { data } = await APIReservations.getReservations();
        reservations.value = data.data;
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
        onCreateReservation,
        totalHours,
        totalAmount,
        rent,
        hour,
        handleSelectServiceToEdit,
        serviceData,
        visible,
        calculateChanges,
        reservation,
        reservations,
        stats,
        getStats,
    }
});