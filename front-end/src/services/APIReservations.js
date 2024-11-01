import { authorization } from "@/helpers/apiHelper";

export default {
    getReservations() {
        return authorization('get', '/reservations');
    },
    create(reservation) {
        return authorization('post', '/create-reservation', reservation);
    },
    getStats() {
        return authorization('get', '/stats');
    },
    update(id, data) {
        return authorization('post', `/update-reservation/${id}`, data);
    }
}