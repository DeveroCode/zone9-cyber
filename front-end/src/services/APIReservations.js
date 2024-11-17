import { authorization } from "@/helpers/apiHelper";

export default {
    getReservations(pageUrl = null) {
        return authorization('get', pageUrl || '/reservations');
    },
    getComputers() {
        return authorization('get', '/computers');
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