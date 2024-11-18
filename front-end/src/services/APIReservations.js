import { authorization } from "@/helpers/apiHelper";

export default {
    getReservations(pageUrl = null) {
        return authorization('get', pageUrl || '/reservations');
    },
    getComputersAvailable($start, $end) {
        return authorization('get', `/available-computers/${$start}/${$end}`);
    },
    create(reservation) {
        return authorization('post', '/create-reservation', reservation);
    },
    getStats() {
        return authorization('get', '/stats');
    },
    update(id, data) {
        return authorization('post', `/update-reservation/${id}`, data);
    },
    delete(id) {
        return authorization('delete', `/delete-reservation/${id}`);
    },
    confirmR(id, data) {
        return authorization('post', `/reservation-loan-update/${id}`, data);
    },
    search(word) {
        return authorization('get', `/search-reservation/${word}`);
    }
}